<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h2 class="h5 mb-3 text-light">{{ title }}</h2>
</template> 