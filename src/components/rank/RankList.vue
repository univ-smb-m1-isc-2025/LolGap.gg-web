<template>
    <div class="rank-list">
        <h2 class="rank-list-title">Ranks</h2>
        <div class="ranks-container">
            <div v-for="rank in ranks" :key="rank.leagueId" class="rank-item">
                <RankCard :rank="rank" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { LeagueEntryDTO } from '../../types/rank'
import RankCard from './RankCard.vue'

const props = defineProps<{
    ranks: LeagueEntryDTO[]
}>()
</script>

<style scoped>
.rank-list-title {
    font-size: 1.675rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
}

.rank-list {
    width: 100%;
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.rank-list h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.ranks-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.rank-item {
    flex: 1;
    min-width: 300px;
}
</style> 