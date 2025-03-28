<script setup>
import { computed } from 'vue';

const props = defineProps({
  tier: {
    type: String,
    required: true
  }
});

const imageUrl = computed(() => {
  return new URL(`../../assets/rank/${props.tier.toLowerCase()}.png`, import.meta.url).href;
});
</script>

<template>
  <div class="rank-icon">
    <img :src="imageUrl" :alt="tier" />
  </div>
</template>

<style scoped>
.rank-icon {
  width: 100px;
  height: 100px;
}

.rank-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style> 