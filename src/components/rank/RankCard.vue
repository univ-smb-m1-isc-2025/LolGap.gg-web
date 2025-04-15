<template>
    <div class="rank-card">
        <div class="rank-main">
            <RankLogo :rank="rank" />
            <div class="queue-name">{{ getQueueName(rank.queueType) }}</div>
        </div>
        <div class="rank-details">
            <div class="tier-info">
                {{ rank.tier }} {{ rank.rank }} - {{ rank.leaguePoints }} LP
            </div>
            <div class="win-loss">
                <span class="wins">{{ rank.wins }}W</span>
                <span class="losses">{{ rank.losses }}L</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { LeagueEntryDTO } from '../../types/rank'
import RankLogo from './RankLogo.vue'

const props = defineProps<{
    rank: LeagueEntryDTO
}>()

const getQueueName = (queueType: string): string => {
    switch (queueType) {
        case 'RANKED_SOLO_5x5':
            return 'Solo/Duo'
        case 'RANKED_FLEX_SR':
            return 'Flex 5v5'
        case 'RANKED_FLEX_TT':
            return 'Flex 3v3'
        default:
            return queueType
    }
}
</script>

<style scoped>
.rank-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background-color: var(--color-background-soft);
    border-radius: 8px;
}

.rank-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.queue-name {
    font-size: 1.2rem;
    font-weight: 600;
}

.rank-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.tier-info {
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.win-loss {
    display: flex;
    gap: 0.5rem;
}

.wins {
    color: var(--success-color);
}

.losses {
    color: var(--error-color);
}
</style> 