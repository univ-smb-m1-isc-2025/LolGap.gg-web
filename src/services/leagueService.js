import dataDragonService from './dataDragonService';
import api from './api';
import queueService from './queueService';

const leagueService = {
    async getLeagueAccount() {
        try {
            const response = await api.get('/api/riot/league');
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération du compte League:', error);
            throw error;
        }
    },

    async getProfileIconUrl() {
        try {
            const leagueData = await this.getLeagueAccount();
            const iconId = leagueData.profileIconId;
            return dataDragonService.getProfileIconUrl(iconId);
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'icône de profil:', error);
            throw error;
        }
    },

    async getRanks() {
        try {
            const response = await api.get('/api/riot/getRanks');
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des rangs:', error);
            throw error;
        }
    },

    async getMatchHistory(queueName) {
        try {
            const queueId = queueService.getQueueId(queueName);
            if (!queueId) {
                throw new Error(`File d'attente invalide: ${queueName}`);
            }

            const response = await api.get(`/api/riot/getMatchHistory/${queueId}`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des matchs:', error); 
            throw error;
        }
    },

    async getMatchHistoryAllQueues() {
        try {
            const response = await api.get(`/api/riot/getMatchHistory`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des matchs:', error); 
            throw error;
        }
    },

    async getMatchDetails(matchId) {
        try {
            const response = await api.get(`/api/riot/getMatchDetails/${matchId}`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des détails du match:', error);
            throw error;
        }
    }
};

export default leagueService; 