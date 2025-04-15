<template>
    <div class="match-recap">
        <h2 class="match-recap-title">5 derniers matchs</h2>
        <div class="match-recap-list">
            <div v-for="match in props.matches" :key="match.metadata.matchId" class="match-recap-item">
                <MatchStatus :win="getPlayerMatch(match)?.win ?? false" />
                <ChampionPicture 
                    :champion-name="getPlayerMatch(match)?.championName ?? ''"
                    :champion-id="getPlayerMatch(match)?.championId ?? ''"
                />
                <MatchKDA 
                    :kills="getPlayerMatch(match)?.kills ?? 0"
                    :deaths="getPlayerMatch(match)?.deaths ?? 0"
                    :assists="getPlayerMatch(match)?.assists ?? 0"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { MatchDetailsDTO, ParticipantDTO } from '../../types/match'
import MatchStatus from './MatchStatus.vue'
import MatchKDA from './MatchKDA.vue'
import ChampionPicture from '../common/ChampionPicture.vue'

const props = defineProps<{
    matches: MatchDetailsDTO[]
    playerPuuid?: string
}>()

console.log(props.matches)

const getPlayerMatch = (match: MatchDetailsDTO): ParticipantDTO | undefined => {
    if (!props.playerPuuid) return undefined
    return match.info.participants.find(p => p.puuid === props.playerPuuid)
}
</script>

<style scoped>
.match-recap {
    padding: 16px;
    width: 100%;
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.match-recap-title {
    color: black;
    font-size: 1.675rem;
    font-weight: bold;
    margin-bottom: 2%;
}

.match-recap-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.match-recap-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0.6rem;
    background-color: white;
    border-radius: 0.5rem;
}
</style>
