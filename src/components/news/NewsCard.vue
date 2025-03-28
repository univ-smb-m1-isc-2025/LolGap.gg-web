<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    validator: (value) => ['feature', 'bug-fix'].includes(value)
  },
  content: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="mb-4 pb-3 border-bottom border-secondary last:border-0 last:pb-0 last:mb-0">
    <h3 class="h6 mb-2">{{ title }}</h3>
    <div 
      class="badge mb-2"
      :class="type === 'feature' ? 'bg-success' : 'bg-danger'"
    >
      {{ type === 'feature' ? 'Feature' : 'Bug fix' }}
    </div>
    <p class="text-secondary mb-0 small">{{ content }}</p>
  </div>
</template>

<style scoped>
.news-card {
  margin: 1rem;
  padding: 1rem;
}

.feature {
  color: var(--victory);
}

.bug-fix {
  color: var(--defeat);
}
</style> 