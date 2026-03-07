/**
 * Storage: alle interactie met localStorage.
 * Beheert spelersdata, voortgang en dagboek.
 */

const Storage = {
    KEY: 'autonomous_save',

    getDefaultState() {
        return {
            playerName: '',
            createdAt: null,
            currentDay: 0,
            lastPlayedDate: null,
            todayCompleted: false,
            todayData: {},
            stats: {
                focus: 0,
                connectie: 0,
                wijsheid: 0,
                energie: 0,
                herstel: 0,
                inspiratie: 0,
            },
            diary: [],
            unlockedLocations: ['hut'],
            unlockedNpcs: ['owl'],
        };
    },

    load() {
        try {
            const raw = localStorage.getItem(this.KEY);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch {
            return null;
        }
    },

    save(state) {
        localStorage.setItem(this.KEY, JSON.stringify(state));
    },

    createNew(playerName) {
        const state = this.getDefaultState();
        state.playerName = playerName;
        state.createdAt = new Date().toISOString();
        state.currentDay = 1;
        state.lastPlayedDate = null;
        this.save(state);
        return state;
    },

    isNewDay(state) {
        if (!state.lastPlayedDate) return true;
        const today = new Date().toDateString();
        const lastPlayed = new Date(state.lastPlayedDate).toDateString();
        return today !== lastPlayed;
    },

    startNewDay(state) {
        if (this.isNewDay(state)) {
            if (state.lastPlayedDate) {
                state.currentDay++;
            }
            state.todayCompleted = false;
            state.todayData = {};
            state.lastPlayedDate = new Date().toISOString();

            // Ontgrendel nieuwe locaties en NPC's
            for (const loc of Object.values(LOCATIONS)) {
                if (state.currentDay >= loc.unlockedAtDay &&
                    !state.unlockedLocations.includes(loc.id)) {
                    state.unlockedLocations.push(loc.id);
                }
            }
            for (const npc of Object.values(NPCS)) {
                if (state.currentDay >= npc.unlockedAtDay &&
                    !state.unlockedNpcs.includes(npc.id)) {
                    state.unlockedNpcs.push(npc.id);
                }
            }

            this.save(state);
        }
        return state;
    },

    completDay(state, dayData) {
        state.todayCompleted = true;
        state.todayData = dayData;

        // Stats bijwerken
        if (dayData.activities) {
            for (const actId of dayData.activities) {
                const act = ACTIVITIES.find(a => a.id === actId);
                if (act && state.stats[act.stat] !== undefined) {
                    state.stats[act.stat]++;
                }
            }
        }

        // Dagboek entry toevoegen
        const entry = {
            day: state.currentDay,
            date: new Date().toISOString(),
            mood: dayData.mood || null,
            activities: dayData.activities || [],
            tags: (dayData.activities || []).map(id => {
                const act = ACTIVITIES.find(a => a.id === id);
                return act ? act.tag : null;
            }).filter(Boolean),
            highlight: dayData.hoogtepunt || '',
            thought: dayData.gedachte || '',
        };
        state.diary.push(entry);

        this.save(state);
        return state;
    },
};
