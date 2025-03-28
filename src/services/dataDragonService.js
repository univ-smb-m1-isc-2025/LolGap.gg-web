const DATA_DRAGON_BASE_URL = 'https://ddragon.leagueoflegends.com/cdn';
const CURRENT_VERSION = '15.6.1';

const dataDragonService = {
    getProfileIconUrl(iconId) {
        return `${DATA_DRAGON_BASE_URL}/${CURRENT_VERSION}/img/profileicon/${iconId}.png`;
    },
    
    async getCurrentVersion() {
        try {
            const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
            const versions = await response.json();
            return versions[0];
        } catch (error) {
            console.error('Erreur lors de la récupération de la version:', error);
            return CURRENT_VERSION;
        }
    }
};

export default dataDragonService; 