<script setup>
defineProps({
  username: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="profile-name">
    <span class="username">{{ username }}</span>
    <span class="tagline">#{{ tagline }}</span>
  </div>
</template>

<style scoped>
.profile-name {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.username {
  font-weight: bold;
  font-size: 1.1rem;
}

.tagline {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style> 