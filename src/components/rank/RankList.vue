<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import RankCard from './RankCard.vue';

const authStore = useAuthStore();
const ranks = ref([]);

onMounted(async () => {
  if (authStore.isAuthenticated) {
    await authStore.getRanks();
    ranks.value = authStore.leagueRanks;
  }
});
</script>

<template>
  <div class="card bg-dark">
    <div class="card-body">
      <h5 class="card-title text-white mb-4">Ranks</h5>
      <div v-if="authStore.ranks">
        <RankCard 
          v-for="rank in authStore.ranks" 
          :key="rank.queueType" 
          :rank="rank"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.rank-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
</style> 