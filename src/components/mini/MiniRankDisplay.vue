<script setup>
import RankIcon from '../rank/RankIcon.vue';

defineProps({
  tier: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  },
  leaguePoints: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="mini-rank">
    <RankIcon :tier="tier" class="mini-icon" />
    <div class="mini-rank-info">
      <span class="tier-rank">{{ tier }} {{ rank }}</span>
      <span class="lp">{{ leaguePoints }} LP</span>
    </div>
  </div>
</template>

<style scoped>
.mini-rank {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mini-icon {
  width: 30px;
  height: 30px;
}

.mini-rank-info {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
}

.tier-rank {
  font-weight: bold;
}

.lp {
  font-size: 0.7rem;
  opacity: 0.8;
}
</style> 