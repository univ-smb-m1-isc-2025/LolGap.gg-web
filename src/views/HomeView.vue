<script setup>
	import NewsList from '../components/news/NewsList.vue'
	import RankList from '../components/rank/RankList.vue'
	import MatchList from '../components/match/MatchList.vue'
	import { useAuthStore } from '../stores/authStore'
	
	const authStore = useAuthStore()

</script>

<template>
  <div class="container-fluid main-content">
    <div class="row h-100">
      <!-- Colonne de gauche (News) - 20% -->
      <div class="col-3">
        <NewsList />
      </div>

      <!-- Colonne de droite (60%) -->
      <div class="col-9">
        <div class="row">
          <!-- Match List en haut -->
          <div class="col-12 mb-4">
            <MatchList />
          </div>
          
          <!-- Rank List en bas -->
          <div class="col-12">
            <RankList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Suppression des styles de scroll inutiles */
</style>

