<template>
    <div class="champion-picture">
        <img :src="championImage" :alt="championName" class="champion-image">
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { dataDragonService } from '../../services/dataDragon.service'

const props = defineProps<{
    championName: string
    championId: string
}>()

const championImage = computed(() => dataDragonService.getChampionImage(props.championName))
</script>

<style scoped>
.champion-picture {
    width: 40px;
    height: 40px;
    border-radius: 0.5rem;
    overflow: hidden;
}

.champion-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style> 