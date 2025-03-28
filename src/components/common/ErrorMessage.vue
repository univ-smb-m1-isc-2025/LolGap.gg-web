<script setup>
defineProps({
  message: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="error-message">{{ message }}</div>
</template>

<style scoped>
.error-message {
  color: #ff4444;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
}
</style> 