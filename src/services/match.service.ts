import api from './api'
import type { MatchDetailsDTO } from '../types/match'

export class MatchService {
    private static instance: MatchService
    private readonly baseUrl = '/api/league/me/matches'

    private constructor() {}

    public static getInstance(): MatchService {
        if (!MatchService.instance) {
            MatchService.instance = new MatchService()
        }
        return MatchService.instance
    }

    async getMatchHistory(): Promise<string[]> {
        const response = await api.get<string[]>(`${this.baseUrl}`)
        return response.data
    }

    async getMatchHistoryWithDetails(summonerId: number, count: number = 5): Promise<MatchDetailsDTO[]> {
        const response = await api.get<MatchDetailsDTO[]>(`${this.baseUrl}/details?summonerId=${summonerId}&count=${count}`)
        return response.data
    }

    async getMatchDetails(matchId: string): Promise<MatchDetailsDTO> {
        const response = await api.get<MatchDetailsDTO>(`${this.baseUrl}/${matchId}`)
        return response.data
    }

    async getMatchHistoryByQueue(queueId: number): Promise<string[]> {
        const response = await api.get<string[]>(`${this.baseUrl}?queueId=${queueId}`)
        return response.data
    }

    async getMatchHistoryWithDetailsByQueue(queueId: number, count: number = 5): Promise<MatchDetailsDTO[]> {
        const response = await api.get<MatchDetailsDTO[]>(`${this.baseUrl}/details?queueId=${queueId}&count=${count}`)
        return response.data
    }
}

export const matchService = MatchService.getInstance()
