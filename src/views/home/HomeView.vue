<template>
    <div class="home-view">
        <div v-if="!account" class="no-account">No account connected</div>
        <div v-else class="home-view-content">
            <div class="top-section">
                <UserInfo :account="account" :leagueAccount=leagueAccount />
                <MatchRecap 
                    v-if="matches.length > 0" 
                    :matches="matches"
                    :player-puuid="leagueAccount?.puuid"
                />
            </div>
            <div v-if="rankStore.isLoading" class="loading">Loading ranks...</div>
            <div v-else-if="rankStore.getError" class="error">{{ rankStore.getError }}</div>
            <RankList v-else :ranks="rankStore.getRanks" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAuthStore } from '../../stores/auth/auth.store'
import { useRankStore } from '../../stores/rank/rank.store'
import UserInfo from '../../components/user/UserInfo.vue'
import RankList from '../../components/rank/RankList.vue'
import MatchRecap from '../../components/match/5matchRecap.vue'
import type { MatchDetailsDTO } from '../../types/match'
import { matchService } from '../../services/match.service'

const authStore = useAuthStore()
const rankStore = useRankStore()
const account = authStore.getAccount
const leagueAccount = authStore.leagueAccount
const matches = ref<MatchDetailsDTO[]>([])

onMounted(async () => {
    if (account?.summonerId) {
        await rankStore.fetchSummonerRanks(account.summonerId)
        matches.value = await matchService.getMatchHistoryWithDetails(parseInt(account.summonerId), 5)
    }
})
</script>

<style scoped>
.home-view {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
}

.home-view-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.top-section {
    display: flex;
    gap: 2rem;
    align-items: stretch;
}

.top-section > * {
    flex: 1;
    min-width: 0;
}

.loading, .error, .no-account {
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    background-color: var(--card-background);
}

.error {
    color: var(--error-color);
}

.no-account {
    color: var(--text-secondary);
}
</style> 