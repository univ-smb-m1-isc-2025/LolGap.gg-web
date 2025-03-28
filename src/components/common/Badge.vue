<script setup>
defineProps({
  text: String,
  type: {
    type: String,
    validator: (value) => ['win', 'lose', 'neutral'].includes(value)
  }
});
</script>

<template>
  <span :class="['badge', type]">{{ text }}</span>
</template>

<style scoped>
.badge {
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
}

.win {
  background-color: var(--victory);
}

.lose {
  background-color: var(--defeat);
}

.neutral {
  background-color: var(--color-markdown-title);
}
</style> 