<script setup>
import { ref, onMounted } from 'vue';
import leagueService from '@/services/leagueService';
import dataDragonService from '@/services/dataDragonService';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

const profileIconUrl = ref(null);
const loading = ref(true);
const error = ref(null);

const loadProfileIcon = async () => {
    try {
        loading.value = true;
        if(!authStore.leagueAccount) {
            await authStore.getLeagueAccount();
        }
        profileIconUrl.value = dataDragonService.getProfileIconUrl(authStore.leagueAccount.profileIconId);
    } catch (err) {
        error.value = "Erreur lors du chargement de l'icône de profil";
        console.error(err);
    } finally {
        loading.value = false;
    }
};

onMounted(loadProfileIcon);
</script>

<template>
    <div class="profile-icon-container">
        <img 
            v-if="profileIconUrl && !loading" 
            :src="profileIconUrl" 
            alt="Profile Icon" 
            class="profile-icon"
        />
        <div v-else-if="loading" class="loading">
            Chargement...
        </div>
        <div v-else-if="error" class="error">
            {{ error }}
        </div>
    </div>
</template>

<style scoped>
.profile-icon-container {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}

.profile-icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.loading, .error {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    background-color: var(--color-frame-background);
}

.error {
    color: #ff4444;
}
</style> 