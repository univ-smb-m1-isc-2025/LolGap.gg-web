import { defineStore } from 'pinia'
import type { MatchDetailsDTO } from '../../types/match'
import { matchService } from '../../services/match.service'

interface MatchState {
    matchHistory: string[]
    matchDetails: MatchDetailsDTO[]
    loading: boolean
    error: string | null
}

export const useMatchStore = defineStore('match', {
    state: (): MatchState => ({
        matchHistory: [],
        matchDetails: [],
        loading: false,
        error: null
    }),

    getters: {
        getMatchHistory: (state) => state.matchHistory,
        getMatchDetails: (state) => state.matchDetails,
        isLoading: (state) => state.loading,
        getError: (state) => state.error
    },

    actions: {
        async fetchMatchHistory() {
            this.loading = true
            this.error = null
            try {
                this.matchHistory = await matchService.getMatchHistory()
            } catch (error) {
                this.error = error instanceof Error ? error.message : 'An error occurred'
            } finally {
                this.loading = false
            }
        },

        async fetchMatchHistoryWithDetails(count: number = 5) {
            this.loading = true
            this.error = null
            try {
                this.matchDetails = await matchService.getMatchHistoryWithDetails(count)
            } catch (error) {
                this.error = error instanceof Error ? error.message : 'An error occurred'
            } finally {
                this.loading = false
            }
        },

        async fetchMatchDetails(matchId: string) {
            this.loading = true
            this.error = null
            try {
                const details = await matchService.getMatchDetails(matchId)
                const index = this.matchDetails.findIndex(match => match.metadata.matchId === matchId)
                if (index !== -1) {
                    this.matchDetails[index] = details
                } else {
                    this.matchDetails.push(details)
                }
            } catch (error) {
                this.error = error instanceof Error ? error.message : 'An error occurred'
            } finally {
                this.loading = false
            }
        },

        async fetchMatchHistoryByQueue(queueId: number) {
            this.loading = true
            this.error = null
            try {
                this.matchHistory = await matchService.getMatchHistoryByQueue(queueId)
            } catch (error) {
                this.error = error instanceof Error ? error.message : 'An error occurred'
            } finally {
                this.loading = false
            }
        },

        async fetchMatchHistoryWithDetailsByQueue(queueId: number, count: number = 5) {
            this.loading = true
            this.error = null
            try {
                this.matchDetails = await matchService.getMatchHistoryWithDetailsByQueue(queueId, count)
            } catch (error) {
                this.error = error instanceof Error ? error.message : 'An error occurred'
            } finally {
                this.loading = false
            }
        },

        clearError() {
            this.error = null
        }
    }
}) 