import { defineStore } from 'pinia'
import type { LeagueEntryDTO } from '../../types/rank'
import { rankService } from '../../services/rank.service'

interface RankState {
    ranks: LeagueEntryDTO[]
    loading: boolean
    error: string | null
}

export const useRankStore = defineStore('rank', {
    state: (): RankState => ({
        ranks: [],
        loading: false,
        error: null
    }),

    getters: {
        getRanks: (state) => state.ranks,
        isLoading: (state) => state.loading,
        getError: (state) => state.error
    },

    actions: {
        async fetchSummonerRanks(summonerId: string) {
            this.loading = true
            this.error = null
            try {
                this.ranks = await rankService.getMyRanks()
            } catch (error) {
                this.error = error instanceof Error ? error.message : 'Failed to fetch ranks'
            } finally {
                this.loading = false
            }
        },

        clearRanks() {
            this.ranks = []
            this.error = null
        }
    }
}) 