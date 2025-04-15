<template>
    <div class="match-recap">
        <div v-for="player in match.info.participants" :key="player.puuid" class="player">
            <div class="player-info">
                <img :src="dataDragonService.getChampionImage(player.championName)" :alt="player.championName" class="champion-image" />
                <div class="player-stats">
                    <span class="summoner-name">{{ player.riotIdGameName }}</span>
                    <span class="kda">{{ player.kills }}/{{ player.deaths }}/{{ player.assists }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MatchDetailsDTO } from '../../types/match'
import { dataDragonService } from '../../services/dataDragon.service'

const props = defineProps<{
    match: MatchDetailsDTO
}>()
</script>

<style scoped>
.match-recap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--background-color);
    border-radius: 8px;
}

.player {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: var(--card-background);
    border-radius: 4px;
}

.player-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.champion-image {
    width: 40px;
    height: 40px;
    border-radius: 4px;
}

.player-stats {
    display: flex;
    flex-direction: column;
}

.summoner-name {
    font-weight: 600;
}

.kda {
    color: var(--text-secondary);
}
</style> 