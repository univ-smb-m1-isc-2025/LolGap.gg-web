<template>
    <div class="user-profil-pic">
        <img v-if="profilPicUrl" :src="profilPicUrl" alt="Profil Pic" />
        <div v-else class="placeholder">?</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth/auth.store'
import { dataDragonService } from '../../services/dataDragon.service'

const authStore = useAuthStore()

const profilPicUrl = computed(() => {
    if (!authStore.leagueAccount?.profileIconId) return ''
    return dataDragonService.getProfileIcon(authStore.leagueAccount.profileIconId.toString())
})
</script>

<style scoped>
.user-profil-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--card-background);
    display: flex;
    align-items: center;
    justify-content: center;
}

.user-profil-pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.placeholder {
    color: var(--text-secondary);
    font-size: 1.2rem;
    font-weight: bold;
}
</style>

