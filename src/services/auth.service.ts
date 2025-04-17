import api from './api'
import type { LoginCredentials, LoginResponse, Account, LeagueAccount } from '../types/account'

export const authService = {
    async login(credentials: LoginCredentials): Promise<LoginResponse> {
        const response = await api.post<LoginResponse>('/login', credentials)
        return response.data
    },

    async register(account: { username: string; password: string; riotGameName: string; riotTagLine: string }) {
        const response = await api.post('/register', account)
        return response.data
    },

    async getMe(token: string): Promise<Account> {
        const response = await api.get<Account>('/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    },

    async getLeagueAccount(token: string): Promise<LeagueAccount> {
        const response = await api.get<LeagueAccount>('/api/league/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
} 