<template>
    <div class="user-info-container">
        <h2 class="user-info-title">Account</h2>
        <div class="user-info">
            <div class="info-grid">
                <div class="info-item">
                    <h3 class="info-label">Username</h3>
                    <p class="info-value">{{ account.username }}</p>
                </div>
                <div class="info-item">
                    <h3 class="info-label">Riot Account</h3>
                    <p class="info-value">{{ account.riotGameName }}#{{ account.riotTagLine }}</p>
                </div>
            </div>
        </div>
        <div class="league-info">
            <div class="info-item">
                <h3 class="info-label">Summoner Level</h3>
                <div class="level-container">
                    <p class="info-value">{{ leagueAccount?.summonerLevel }}</p>
                </div>
            </div>
        </div>
        <SummonerId :value="account.summonerId" />
        <AccountId :value="account.accountId" />
    </div>
</template>

<script setup lang="ts">
import type { Account } from '../../types/account'
import type { LeagueAccount } from '../../types/account'
import SummonerId from '../common/SummonerId.vue'
import AccountId from '../common/AccountId.vue'

interface Props {
    account: Account
    leagueAccount: LeagueAccount | null
}

defineProps<Props>()
</script>

<style scoped>
.user-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.info-item {
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem 1rem 0rem;
}

.info-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
}

.info-value {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: #111827;
}

.user-info-title {
    font-size: 1.675rem;
    font-weight: 800;
    color: #111827;
    margin: 0 0 6% 0;
}

.user-info-container {
    max-width: 28rem;
    width: 100%;
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.league-info {
    margin-top: 1rem;
}

.level-container {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style> 