import { defineStore } from 'pinia'
import axios from 'axios'

interface Account {
    id: number
    username: string
    riotGameName: string
    riotTagLine: string
    riotPuuid: string
    summonerId: string
    accountId: string
}

interface UserState {
    account: Account | null
    token: string | null
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        account: null,
        token: localStorage.getItem('token')
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
        getAccount: (state) => state.account
    },

    actions: {
        async login(username: string, password: string) {
            try {
                const response = await axios.post('http://localhost:8080/login', {
                    username,
                    password
                })
                
                const { user, token } = response.data
                this.account = user
                this.token = token
                localStorage.setItem('token', token)
                return true
            } catch (error) {
                console.error('Login failed:', error)
                return false
            }
        },

        logout() {
            this.account = null
            this.token = null
            localStorage.removeItem('token')
        }
    }
}) 