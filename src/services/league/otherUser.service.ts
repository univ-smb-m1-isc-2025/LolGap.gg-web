import api from '../api'
import type { LeagueAccount } from '../../types/account'
import type { LeagueEntryDTO } from '../../types/rank'
import type { MatchDetailsDTO } from '../../types/match'
import type { RiotAccountDTO } from '../../types/riot'

export class OtherUserService {
    async getLeagueAccount(userId: number): Promise<LeagueAccount> {
        const response = await api.get(`/api/league/users/${userId}`)
        return response.data
    }

    async getLeagueRanks(userId: number): Promise<LeagueEntryDTO[]> {
        const response = await api.get(`/api/league/users/${userId}/ranks`)
        return response.data
    }

    async getMatchHistory(userId: number): Promise<string[]> {
        const response = await api.get(`/api/league/users/${userId}/matches`)
        return response.data
    }

    async getMatchHistoryWithDetails(userId: number, count: number = 5): Promise<MatchDetailsDTO[]> {
        const response = await api.get(`/api/league/users/${userId}/matches/details`, {
            params: { count }
        })
        return response.data
    }

    async getMatchDetails(userId: number, matchId: string): Promise<MatchDetailsDTO> {
        const response = await api.get(`/api/league/users/${userId}/matches/${matchId}`)
        return response.data
    }

    async getRiotAccount(userId: number): Promise<RiotAccountDTO> {
        const response = await api.get(`/api/riot/users/${userId}`)
        return response.data
    }
}

export const otherUserService = new OtherUserService() 