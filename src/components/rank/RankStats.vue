<script setup>
import GameStats from '../common/GameStats.vue';

defineProps({
  wins: {
    type: Number,
    required: true
  },
  losses: {
    type: Number,
    required: true
  },
  leaguePoints: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="rank-stats">
    <span class="lp">{{ leaguePoints }} LP</span>
    <GameStats 
      :stats="{ wins, losses }" 
      type="winrate"
    />
  </div>
</template>

<style scoped>
.rank-stats {
  display: flex;
  align-items: center;
  gap: 20px;
}

.lp {
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-primary-white);
}
</style> 