const QUEUE_TYPES = {
    // Ranked Solo/Duo
    'RANKED_SOLO_5X5': 420,
    'RANKED_SOLO': 420,
    'SOLO_DUO': 420,
    'SOLOQ': 420,

    // Ranked Flex
    'RANKED_FLEX_SR': 440,
    'RANKED_FLEX': 440,
    'FLEX': 440,
    'FLEX_5V5': 440,

    // Normal Games
    'NORMAL_DRAFT_5X5': 400,
    'NORMAL_DRAFT': 400,
    'DRAFT_PICK': 400,
    
    'NORMAL_BLIND_5X5': 430,
    'NORMAL_BLIND': 430,
    'BLIND_PICK': 430,

    // ARAM
    'ARAM': 450,
    'ARAM_5X5': 450,

    // Special Modes
    'URF': 900,
    'ARURF': 900,
    'ONEFORALL': 1020,
    'ONE_FOR_ALL': 1020,
    'NEXUS_BLITZ': 1300,
    'ULTIMATE_SPELLBOOK': 1400,
    'ARENA': 1700
};

const queueService = {
    getQueueId(queueName) {
        if (!queueName) return null;
        
        // Normalisation plus robuste
        const normalizedName = queueName
            .toUpperCase()
            .replace(/\s+/g, '_')
            .replace(/x/gi, 'X');  // Convertit 'x' en 'X'
        
        
        return QUEUE_TYPES[normalizedName] || null;
    },

    isValidQueue(queueName) {
        return this.getQueueId(queueName) !== null;
    },

    getQueueName(queueId) {
        const entry = Object.entries(QUEUE_TYPES).find(([_, id]) => id === queueId);
        return entry ? entry[0] : null;
    },

    getDisplayName(queue) {
        const queueId = typeof queue === 'number' ? queue : this.getQueueId(queue);
        
        const displayNames = {
            420: 'Ranked Solo/Duo',
            440: 'Ranked Flex',
            400: 'Normal Draft',
            430: 'Normal Blind',
            450: 'ARAM',
            900: 'URF',
            1020: 'One For All',
            1300: 'Nexus Blitz',
            1400: 'Ultimate Spellbook',
            1700: 'Arena'
        };

        return displayNames[queueId] || 'Unknown Queue';
    },

    getAllQueues() {
        const uniqueQueueIds = [...new Set(Object.values(QUEUE_TYPES))];
        return uniqueQueueIds.map(id => ({
            id,
            name: this.getQueueName(id),
            displayName: this.getDisplayName(id)
        }));
    }
};

export default queueService; 