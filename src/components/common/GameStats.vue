<script setup>
defineProps({
  stats: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        ('kills' in value && 'deaths' in value && 'assists' in value) ||
        ('wins' in value && 'losses' in value)
      );
    }
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['kda', 'winrate'].includes(value)
  }
});
</script>

<template>
  <div class="game-stats">
    <template v-if="type === 'kda'">
      <span>{{ stats.kills }}</span>
      <span class="separator">/</span>
      <span>{{ stats.deaths }}</span>
      <span class="separator">/</span>
      <span>{{ stats.assists }}</span>
    </template>
    <template v-else>
      <span class="wins">{{ stats.wins }}</span>
      <span class="separator">/</span>
      <span class="losses">{{ stats.losses }}</span>
    </template>
  </div>
</template>

<style scoped>
.game-stats {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  font-weight: bold;
}

.separator {
  opacity: 0.7;
}

.wins {
  color: var(--victory);
}

.losses {
  color: var(--defeat);
}
</style> 