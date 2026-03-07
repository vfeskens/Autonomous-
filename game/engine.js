/**
 * Engine: game logica en dagelijkse check-in flow.
 */

const Engine = {
    state: null,
    currentStepIndex: 0,
    dayData: {},

    init() {
        this.state = Storage.load();

        if (!this.state) {
            UI.showScreen('welcome-screen');
            return;
        }

        if (this.state.todayCompleted && !Storage.isNewDay(this.state)) {
            UI.showNav();
            this.showDoneScreen();
            return;
        }

        this.state = Storage.startNewDay(this.state);
        this.currentStepIndex = 0;
        this.dayData = {};
        UI.showNav();
        this.runStep();
    },

    startNewGame(playerName) {
        this.state = Storage.createNew(playerName);
        this.state = Storage.startNewDay(this.state);
        this.currentStepIndex = 0;
        this.dayData = {};
        UI.showNav();
        this.runStep();
    },

    runStep() {
        if (this.currentStepIndex >= DAILY_STEPS.length) {
            this.finishDay();
            return;
        }

        const step = DAILY_STEPS[this.currentStepIndex];
        const variant = step.variants[Math.floor(Math.random() * step.variants.length)];

        UI.showScreen('game-screen');
        UI.updateLocationHeader(this.getCurrentLocation(), this.state.currentDay);

        switch (step.type) {
            case 'mood':
                this.showMoodStep(variant);
                break;
            case 'npc_question':
                this.showNpcQuestion(variant);
                break;
            case 'activities':
                this.showActivities(variant);
                break;
            case 'highlight':
                this.showNpcQuestion(variant);
                break;
        }
    },

    showMoodStep(variant) {
        UI.setStory(variant.text);

        const moodChoices = Object.entries(MOODS).map(([key, mood]) => ({
            label: `${mood.emoji} ${mood.label}`,
            value: key,
        }));

        UI.showChoices(moodChoices, (value) => {
            this.dayData.mood = value;
            this.nextStep();
        });
    },

    showNpcQuestion(variant) {
        const npc = variant.npc ? NPCS[variant.npc] : null;

        if (npc) {
            UI.setNpcMessage(npc.name, variant.text);
        } else {
            UI.setStory(variant.text);
        }

        UI.showTextInput((text) => {
            if (variant.diaryKey) {
                this.dayData[variant.diaryKey] = text;
            }
            this.nextStep();
        });
    },

    showActivities(variant) {
        UI.setStory(variant.text);
        UI.showActivityPicker(ACTIVITIES, (selectedIds) => {
            this.dayData.activities = selectedIds;
            this.nextStep();
        });
    },

    nextStep() {
        this.currentStepIndex++;
        this.runStep();
    },

    finishDay() {
        this.state = Storage.completDay(this.state, this.dayData);
        this.showDoneScreen();
    },

    showDoneScreen() {
        const latestEntry = this.state.diary[this.state.diary.length - 1];
        let summary = 'Je hebt weer een dag vastgelegd in je verhaal.';

        if (latestEntry && latestEntry.mood) {
            const mood = MOODS[latestEntry.mood];
            summary = `Een ${mood.label.toLowerCase()} dag ligt achter je.`;
        }

        UI.showDoneScreen(summary, this.state.playerName);
    },

    getCurrentLocation() {
        const unlocked = this.state.unlockedLocations;
        const locationId = unlocked[unlocked.length - 1];
        return LOCATIONS[locationId] || LOCATIONS.hut;
    },
};
