<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="card bg-dark text-light border-secondary">
    <div class="card-body">
      <h5 v-if="title" class="card-title border-bottom border-secondary pb-2 mb-3">
        {{ title }}
      </h5>
      <slot></slot>
    </div>
  </div>
</template> 