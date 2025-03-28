<script setup>
const props = defineProps({
  tier: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  }
});

const getRankImage = (tier) => {
  return new URL(`../../assets/rank/${tier.toLowerCase()}.png`, import.meta.url).href;
};
</script>

<template>
  <div class="rank-badge">
    <img :src="getRankImage(tier)" :alt="tier" class="rank-badge-icon">
    <div class="rank-badge-info">
      <span class="rank-tier">{{ tier }}</span>
      <span class="rank-division">{{ rank }}</span>
    </div>
  </div>
</template>

<style scoped>
.rank-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rank-badge-icon {
  width: 40px;
  height: 40px;
}

.rank-badge-info {
  display: flex;
  flex-direction: column;
}

.rank-tier {
  font-weight: bold;
  font-size: 1.1rem;
}

.rank-division {
  font-size: 0.9rem;
}
</style> 