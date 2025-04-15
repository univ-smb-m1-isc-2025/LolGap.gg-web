import api from './api'
import type { LeagueEntryDTO } from '../types/rank'

export class RankService {
    private static instance: RankService
    private readonly baseUrl = '/api/league/me/ranks'

    private constructor() {}

    public static getInstance(): RankService {
        if (!RankService.instance) {
            RankService.instance = new RankService()
        }
        return RankService.instance
    }

    async getMyRanks(): Promise<LeagueEntryDTO[]> {
        console.log('getMyRanks')
        const response = await api.get<LeagueEntryDTO[]>(this.baseUrl)
        console.log('response', response)
        return response.data
    }
}

export const rankService = RankService.getInstance() 