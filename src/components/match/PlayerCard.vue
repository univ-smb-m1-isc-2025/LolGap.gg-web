<script setup>
import GameStats from '../common/GameStats.vue';
import Badge from '../common/Badge.vue';

const props = defineProps({
  player: {
    type: Object,
    required: true
  },
  isCurrentUser: {
    type: Boolean,
    default: false
  },
  isWinner: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <div class="player-card">
    <div class="player-info">
      <Badge 
        :class="{ 'me': isCurrentUser }"
        :type="isWinner ? 'win' : 'lose'"
        :text="`${player.riotIdGameName} #${player.riotIdTagline}`"
      />
      <GameStats 
        :stats="{
          kills: player.kills,
          deaths: player.deaths,
          assists: player.assists
        }"
        type="kda"
      />
    </div>
  </div>
</template>

<style scoped>
.player-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
}

.player-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.me {
  background-color: var(--color-primary-white) !important;
  color: black;
}
</style> 