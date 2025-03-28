<script setup>
defineProps({
  tier: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="rank-title">
    <h4>{{ tier }}</h4>
    <h4>{{ rank }}</h4>
  </div>
</template>

<style scoped>
.rank-title {
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: var(--color-markdown-title);
  border-radius: 5px;
  padding: 1% 5%;
}

.rank-title h4 {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-primary-white);
}
</style> 