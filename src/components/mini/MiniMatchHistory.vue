<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import leagueService from '@/services/leagueService';

const props = defineProps({
  queueType: {
    type: String,
    required: true
  }
});

const authStore = useAuthStore();
const matches = ref([]);

onMounted(async () => {
  const matchList = await leagueService.getMatchHistory(props.queueType);
  for (const match of matchList) {
    const details = await leagueService.getMatchDetails(match);
    matches.value.push(details);
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
      v-for="match in matches.slice(0, 5)" 
      :key="match.id"
      class="badge"
      :class="getPlayerWin(match) ? 'bg-success' : 'bg-danger'"
    >
      {{ getPlayerWin(match) ? 'V' : 'D' }}
    </div>
  </div>
</template>

<style scoped>
.mini-match-history {
  display: flex;
  gap: 0.5rem;
  width: 20%;
}
</style> 