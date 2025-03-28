<script setup>
import TeamSection from './TeamSection.vue';
import { useAuthStore } from '@/stores/authStore';

const props = defineProps({
  match: {
    type: Object,
    required: true
  }
});

const authStore = useAuthStore();
</script>

<template>
  <div class="match-card">
    <TeamSection
      title="WINNER TEAM"
      :players="match.info.participants.filter(p => p.win)"
      :is-winning-team="true"
      :current-user-puuid="authStore.user.riotPuuid"
    />
    <TeamSection
      title="LOSER TEAM"
      :players="match.info.participants.filter(p => !p.win)"
      :is-winning-team="false"
      :current-user-puuid="authStore.user.riotPuuid"
    />
  </div>
</template>

<style scoped>
.match-card {
  display: flex;
  width: 100%;
  background-color: var(--color-frame-background);
  border-radius: 15px;
  margin: 0.5rem 0;
}
</style> 