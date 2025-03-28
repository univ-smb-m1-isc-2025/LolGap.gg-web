import { defineStore } from 'pinia';
import authService from '@/services/authService';
import leagueService from '@/services/leagueService';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        leagueAccount: null,
        leagueMatches: [],
        leagueRanks: [],
        isAuthenticated: false,
        loading: false,
        error: null
    }),

    actions: {
        async login(username, password) {
            this.loading = true;
            this.error = null;
            try {
                const data = await authService.login(username, password);
                this.user = data.user;
                this.isAuthenticated = true;
            } catch (error) {
                this.error = error.response?.data?.message || 'Une erreur est survenue';
                throw error;
            } finally {
                this.loading = false;
            }
        },

        async getLeagueAccount() {
            try {
                const leagueAccount = await leagueService.getLeagueAccount();
                this.leagueAccount = leagueAccount;
            } catch (error) {
                console.error('Erreur lors de la récupération du compte League:', error);
                throw error;
            }
        },

        async getMatchHistory() {
            try {
                let leagueMatches = await leagueService.getMatchHistory();
                this.leagueMatches = leagueMatches;
                for (let i = 0; i < this.leagueMatches.length; i++) {
                    const matchDetails = await leagueService.getMatchDetails(this.leagueMatches[i]);
                    this.leagueMatches[i] = matchDetails;
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des matchs:', error);
                throw error;
            }
        },

        async getRanks() {
            try {
                const leagueRanks = await leagueService.getRanks();
                this.leagueRanks = leagueRanks;
            } catch (error) {
                console.error('Erreur lors de la récupération des rangs:', error);
                throw error;
            }
        },

        logout() {
            authService.logout();
            this.user = null;
            this.isAuthenticated = false;
        },

        initializeAuth() {
            const token = localStorage.getItem('jwt_token');
            if (token) {
                this.isAuthenticated = true;
                //this.loadUserProfile();
            }
        },

        async loadUserProfile() {
            try {
                const response = await authService.api.get('/user/profile');
                this.user = response.data;
            } catch (error) {
                console.error('Erreur lors du chargement du profil:', error);
            }
        }
    }
}); 