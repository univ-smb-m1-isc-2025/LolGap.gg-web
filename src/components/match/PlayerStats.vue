<script setup>
defineProps({
  kills: {
    type: Number,
    required: true
  },
  deaths: {
    type: Number,
    required: true
  },
  assists: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="player-stats">
    <span>{{ kills }}</span>
    <span class="separator">/</span>
    <span>{{ deaths }}</span>
    <span class="separator">/</span>
    <span>{{ assists }}</span>
  </div>
</template>

<style scoped>
.player-stats {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.separator {
  opacity: 0.7;
}
</style> 