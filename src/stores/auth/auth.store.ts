import { defineStore } from 'pinia'
import { authService } from '../../services/auth.service'
import type { Account, LeagueAccount } from '../../types/account'

interface AuthState {
    token: string | null
    account: Account | null
    leagueAccount: LeagueAccount | null
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        token: localStorage.getItem('token'),
        account: null,
        leagueAccount: null
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
        getAccount: (state) => state.account
    },

    actions: {
        async login(credentials: { username: string; password: string }) {
            try {
                const response = await authService.login(credentials)
                this.token = response.token
                await this.checkAuth();
                localStorage.setItem('token', response.token)
                return { success: true, user: response.user }
            } catch (error) {
                console.error('Login failed:', error)
                return { success: false, error }
            }
        },

        logout() {
            this.token = null
            this.account = null
            this.leagueAccount = null
            localStorage.removeItem('token')
        },

        async checkAuth() {
            if (!this.token) return false
            try {
                const response = await authService.getMe(this.token)
                const leagueAccount = await authService.getLeagueAccount(this.token)
                this.account = response
                this.leagueAccount = leagueAccount
                return true
            } catch (error) {
                console.error('Auth check failed:', error)
                this.logout()
                return false
            }
        }
    }
}) 