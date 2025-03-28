<script setup>
import NewsCard from './NewsCard.vue';

const news = [
  {
    title: 'Preview Last Match',
    type: 'feature',
    content: "Dans l'écran d'accueil, vous pouvez désormais voir le dernier match joué par l'utilisateur, Le tout avec une petite description du match, statistiques et le résultat tant attendu de la partie."
  },
  {
    title: 'Patch Type Queue in preview',
    type: 'bug-fix',
    content: "Bug reglé, quand au chargement du preview des last games, le type de queue n'était pas pris en compte, donc les mêmes récap de game étaient affichés pour tous les types de queue."
  },
  {
    title: 'Connexion & Riot game',
    type: 'feature',
    content: 'La connexion est désormais disponible, liant votre compte Riot Games à votre compte LoLGap.gg (données publics utilisées uniquement).'
  }
];
</script>

<template>
  <div class="card bg-dark text-light border-secondary">
    <div class="card-header border-secondary">
      <h2 class="h5 mb-0">What's new</h2>
    </div>
    <div class="card-body">
      <NewsCard
        v-for="(item, index) in news"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template> 