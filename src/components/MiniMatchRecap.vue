<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import leagueService from '@/services/leagueService';

const props = defineProps({
  queueType: {
    type: String,
    required: true
  },
  limit: {
    type: Number,
    default: 5
  }
});

const authStore = useAuthStore();
const miniMatchRecap = ref([]);

onMounted(async () => {
  // Ne récupérer que le nombre de matchs nécessaires
  let matches = await leagueService.getMatchHistory(props.queueType);
  matches = matches.slice(0, props.limit); // Limite le nombre de matchs
  
  for (let match of matches) {
    let matchDetails = await leagueService.getMatchDetails(match);
    miniMatchRecap.value.push(matchDetails);
  }
});

const getPlayerWin = (match) => {
  const participant = match.info.participants.find(
    p => p.puuid === authStore.user.riotPuuid
  );
  return participant?.win;
};
</script>

<template>
  <div class="d-flex gap-1">
    <div 
      v-for="match in miniMatchRecap" 
      :key="match.id"
      class="match-indicator text-white"
      :class="getPlayerWin(match) ? 'bg-success' : 'bg-danger'"
    >
      {{ getPlayerWin(match) ? 'V' : 'D' }}
    </div>
  </div>
</template>

<style scoped>
.match-indicator {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: bold;
}
</style>
