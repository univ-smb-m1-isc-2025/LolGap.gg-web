<script setup>
import PlayerCard from './PlayerCard.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  players: {
    type: Array,
    required: true
  },
  isWinningTeam: {
    type: Boolean,
    required: true
  },
  currentUserPuuid: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="team-section">
    <h2 :style="{ color: isWinningTeam ? 'var(--victory)' : 'var(--defeat)' }">
      {{ title }}
    </h2>
    <div class="players-list">
      <PlayerCard
        v-for="player in players"
        :key="player.puuid"
        :player="player"
        :is-winner="isWinningTeam"
        :is-current-user="player.puuid === currentUserPuuid"
      />
    </div>
  </div>
</template>

<style scoped>
.team-section {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
}

.players-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}
</style> 