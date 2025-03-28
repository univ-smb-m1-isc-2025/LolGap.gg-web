<script setup>
import ProfileIcon from './ProfileIcon.vue';
import ProfileName from './ProfileName.vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
};
</script>

<template>
  <div class="profile-section">
    <ProfileIcon />
    <ProfileName 
      :username="authStore.user.username"
      :tagline="authStore.user.riotIdTagline"
    />
    <button @click="handleLogout" class="logout-button">
      Déconnexion
    </button>
  </div>
</template>

<style scoped>
.profile-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logout-button {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid var(--color-primary-white);
  color: var(--color-primary-white);
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-button:hover {
  background-color: var(--color-primary-white);
  color: var(--color-frame-background);
}
</style> 