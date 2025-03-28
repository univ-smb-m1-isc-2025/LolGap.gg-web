<script setup>
import PlayerCard from './PlayerCard.vue';

defineProps({
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
  <div class="players-list">
    <PlayerCard
      v-for="player in players"
      :key="player.puuid"
      :player="player"
      :is-winner="isWinningTeam"
      :is-current-user="player.puuid === currentUserPuuid"
    />
  </div>
</template>

<style scoped>
.players-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}
</style> 