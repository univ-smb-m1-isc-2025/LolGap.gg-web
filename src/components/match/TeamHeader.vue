<script setup>
defineProps({
  isWinningTeam: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <h2 :class="['team-header', isWinningTeam ? 'winner' : 'loser']">
    {{ isWinningTeam ? 'WINNER TEAM' : 'LOSER TEAM' }}
  </h2>
</template>

<style scoped>
.team-header {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.winner {
  color: var(--victory);
}

.loser {
  color: var(--defeat);
}
</style> 