<script setup>
import { ref, onMounted } from 'vue';
import MatchCard from './MatchCard.vue';
import { useAuthStore } from '@/stores/authStore';
import leagueService from '@/services/leagueService';

const matches = ref([]);
const authStore = useAuthStore();

onMounted(async () => {
  const matchList = await leagueService.getMatchHistoryAllQueues();
  // Ne prendre que le premier match
  if (matchList.length > 0) {
    const details = await leagueService.getMatchDetails(matchList[0]);
    matches.value = [details]; // Un seul match dans le tableau
  }
});
</script>

<template>
  <div class="card bg-dark">
    <div class="card-body">
      <h5 class="card-title text-white mb-4">Dernier Match</h5>
      <MatchCard 
        v-if="matches.length > 0"
        :match="matches[0]"
      />
    </div>
  </div>
</template> 