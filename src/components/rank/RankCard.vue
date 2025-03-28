<script setup>
import RankBadge from './RankBadge.vue';
import GameStats from '../common/GameStats.vue';
import QueueName from './QueueName.vue';
import MiniMatchHistory from '../mini/MiniMatchHistory.vue';
import queueService from '@/services/queueService';

defineProps({
  rank: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        'tier' in value &&
        'rank' in value &&
        'leaguePoints' in value &&
        'wins' in value &&
        'losses' in value &&
        'queueType' in value
      );
    }
  }
});

const getRankImage = (tier) => {
  return new URL(`../../assets/rank/${tier.toLowerCase()}.png`, import.meta.url).href;
};
</script>

<template>
  <div class="card bg-dark border-secondary mb-3">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center gap-3">
          <img 
            :src="getRankImage(rank.tier)" 
            :alt="rank.tier"
            class="rank-icon"
          >
          <div>
            <div class="text-white h6 mb-0">{{ rank.tier }} {{ rank.rank }}</div>
            <small class="text-white-50">{{ rank.leaguePoints }} LP</small>
          </div>
        </div>
        <MiniMatchRecap :queueType="rank.queueType" :limit="5" />
      </div>

      <div class="stats text-white">
        <span class="badge bg-secondary me-2">
          {{ queueService.getDisplayName(rank.queueType) }}
        </span>
        <span class="text-success fw-bold">{{ rank.wins }}W</span>
        <span class="mx-2 text-white-50">/</span>
        <span class="text-danger fw-bold">{{ rank.losses }}L</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rank-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

/* Force les couleurs du texte */
.text-white {
  color: #ffffff !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}
</style> 