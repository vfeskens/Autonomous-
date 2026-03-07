/**
 * Game content: alle vragen, dialogen, locaties en NPC's.
 * Dit bestand is het primaire doel voor dagelijkse verbeteringen.
 */

const MOODS = {
    energetic: { emoji: '⚡', label: 'Energiek', color: '#4ecca3' },
    happy: { emoji: '😊', label: 'Blij', color: '#f5c469' },
    calm: { emoji: '😌', label: 'Rustig', color: '#7ec8e3' },
    tired: { emoji: '😴', label: 'Moe', color: '#8a8a9a' },
    stressed: { emoji: '😤', label: 'Gestrest', color: '#e94560' },
};

const ACTIVITIES = [
    { id: 'work', label: 'Werkte aan iets groots', tag: 'Werk', stat: 'focus' },
    { id: 'social', label: 'Had een goed gesprek', tag: 'Sociaal', stat: 'connectie' },
    { id: 'learn', label: 'Leerde iets nieuws', tag: 'Leren', stat: 'wijsheid' },
    { id: 'outside', label: 'Ging naar buiten', tag: 'Buiten', stat: 'energie' },
    { id: 'rest', label: 'Nam rust', tag: 'Rust', stat: 'herstel' },
    { id: 'creative', label: 'Was creatief bezig', tag: 'Creatief', stat: 'inspiratie' },
];

const LOCATIONS = {
    hut: {
        id: 'hut',
        name: 'Je hutje',
        description: 'Een gezellig hutje aan de rand van het dal. Rook kringelt uit de schoorsteen.',
        unlockedAtDay: 1,
    },
    village: {
        id: 'village',
        name: 'Het dorpje',
        description: 'Een klein dorpje met een paar huizen, een marktplein en een fontein.',
        unlockedAtDay: 8,
    },
    forest: {
        id: 'forest',
        name: 'Het bos',
        description: 'Een oud bos met hoge bomen. Zonlicht filtert door het bladerdak.',
        unlockedAtDay: 15,
    },
    library: {
        id: 'library',
        name: 'De bibliotheek',
        description: 'Een stoffige bibliotheek vol met boeken en zachte stilte.',
        unlockedAtDay: 22,
    },
};

const NPCS = {
    owl: {
        id: 'owl',
        name: 'Wijze Uil',
        location: 'hut',
        unlockedAtDay: 1,
    },
    cat: {
        id: 'cat',
        name: 'Nieuwsgierige Kat',
        location: 'village',
        unlockedAtDay: 8,
    },
    tree: {
        id: 'tree',
        name: 'Oude Boom',
        location: 'forest',
        unlockedAtDay: 15,
    },
};

/**
 * Dagelijkse check-in stappen.
 * Elke stap heeft een type en varianten die willekeurig gekozen worden.
 */
const DAILY_STEPS = [
    // Stap 1: Stemming peilen
    {
        type: 'mood',
        variants: [
            {
                text: 'De ochtendzon schijnt door je raam. Hoe voel je je vandaag?',
                npc: null,
            },
            {
                text: 'Je wordt wakker van vogelgezang. Hoe begin je deze dag?',
                npc: null,
            },
            {
                text: 'Een nieuwe dag breekt aan in het dal. Hoe is je energie?',
                npc: null,
            },
        ],
    },
    // Stap 2: NPC vraagt iets
    {
        type: 'npc_question',
        variants: [
            {
                npc: 'owl',
                text: 'Wat houdt je vandaag bezig?',
                inputType: 'text',
                diaryKey: 'gedachte',
            },
            {
                npc: 'owl',
                text: 'Waar kijk je naar uit vandaag?',
                inputType: 'text',
                diaryKey: 'gedachte',
            },
            {
                npc: 'owl',
                text: 'Is er iets dat je dwars zit?',
                inputType: 'text',
                diaryKey: 'gedachte',
            },
        ],
    },
    // Stap 3: Activiteiten kiezen
    {
        type: 'activities',
        variants: [
            {
                text: 'Wat deed je karakter vandaag? Kies wat bij jouw dag past.',
            },
        ],
    },
    // Stap 4: Hoogtepunt
    {
        type: 'highlight',
        variants: [
            {
                npc: 'owl',
                text: 'Wat was het mooiste moment van je dag?',
                inputType: 'text',
                diaryKey: 'hoogtepunt',
            },
            {
                npc: 'owl',
                text: 'Als je één ding van vandaag zou onthouden, wat zou dat zijn?',
                inputType: 'text',
                diaryKey: 'hoogtepunt',
            },
            {
                npc: 'owl',
                text: 'Waar ben je dankbaar voor vandaag?',
                inputType: 'text',
                diaryKey: 'hoogtepunt',
            },
        ],
    },
];
