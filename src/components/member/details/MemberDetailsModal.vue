<template>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <div class="modal-header">
                <h2>{{ memberAccount?.username || 'Loading...' }}</h2>
                <button class="close-button" @click="closeModal">×</button>
            </div>
            <div class="modal-body">
                <div v-if="loading" class="loading">Loading...</div>
                <div v-else class="content-section">
                    <div class="top-section">
                        <UserInfo 
                            v-if="memberAccount && leagueAccount"
                            :account="memberAccount"
                            :league-account="leagueAccount"
                        />
                        <MatchRecap 
                            v-if="matches.length > 0"
                            :matches="matches"
                            :player-puuid="leagueAccount?.puuid"
                        />
                    </div>
                    <div class="bottom-section">
                        <div v-if="ranksLoading" class="loading">Loading ranks...</div>
                        <div v-else-if="ranksError" class="error">{{ ranksError }}</div>
                        <RankList v-else :ranks="ranks" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { OtherUserService } from '../../../services/league/otherUser.service'
import type { Account } from '../../../types/account'
import type { LeagueAccount } from '../../../types/account'
import type { MatchDetailsDTO } from '../../../types/match'
import type { LeagueEntryDTO } from '../../../types/rank'
import UserInfo from '../../user/UserInfo.vue'
import MatchRecap from '../../match/5matchRecap.vue'
import RankList from '../../rank/RankList.vue'

const props = defineProps<{
    isOpen: boolean
    memberId: number
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()

const otherUserService = new OtherUserService()
const memberAccount = ref<Account | null>(null)
const leagueAccount = ref<LeagueAccount | null>(null)
const matches = ref<MatchDetailsDTO[]>([])
const ranks = ref<LeagueEntryDTO[]>([])
const loading = ref(false)
const ranksLoading = ref(false)
const ranksError = ref<string | null>(null)

const closeModal = () => {
    emit('close')
}

const loadData = async () => {
    if (!props.memberId) return
    
    loading.value = true
    try {
        // Load Riot account first
        const riotAccount = await otherUserService.getRiotAccount(props.memberId)
        
        // Then load League account
        const league = await otherUserService.getLeagueAccount(props.memberId)
        
        // Create member account with the data we have
        memberAccount.value = {
            id: props.memberId,
            username: riotAccount.gameName,
            email: '',
            riotGameName: riotAccount.gameName,
            riotTagLine: riotAccount.tagLine,
            summonerId: league.id,
            accountId: league.accountId
        }
        
        leagueAccount.value = league
        
        // Load ranks
        ranksLoading.value = true
        try {
            const memberRanks = await otherUserService.getLeagueRanks(props.memberId)
            ranks.value = memberRanks
        } catch (error) {
            console.error('Error fetching member ranks:', error)
            ranksError.value = 'Failed to load ranks'
        } finally {
            ranksLoading.value = false
        }
        
        // Finally load matches
        const matchDetails = await otherUserService.getMatchHistoryWithDetails(props.memberId, 5)
        matches.value = matchDetails
    } catch (error) {
        console.error('Error fetching member details:', error)
    } finally {
        loading.value = false
    }
}

// Load data when modal opens
watch(() => props.isOpen, (newValue) => {
    if (newValue) {
        loadData()
    } else {
        // Reset data when modal closes
        memberAccount.value = null
        leagueAccount.value = null
        matches.value = []
        ranks.value = []
        ranksError.value = null
    }
})

// Initial load
onMounted(() => {
    if (props.isOpen) {
        loadData()
    }
})
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    border-radius: 8px;
    width: 90%;
    max-width: 1200px;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
}

.modal-header h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
}

.close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #6b7280;
}

.close-button:hover {
    color: #1f2937;
}

.modal-body {
    padding: 1rem;
}

.content-section {
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

.bottom-section {
    width: 100%;
}

.loading, .error {
    text-align: center;
    padding: 1rem;
    border-radius: 8px;
    background-color: var(--card-background);
}

.error {
    color: var(--error-color);
}
</style> 