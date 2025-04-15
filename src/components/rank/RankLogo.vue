<template>
    <div class="rank-logo">
        <img :src="logoUrl" :alt="rank.tier" />
    </div>
</template>

<script setup lang="ts">
import type { LeagueEntryDTO } from '../../types/rank'
import { computed } from 'vue'

const props = defineProps<{
    rank: LeagueEntryDTO
}>()

const logoUrl = computed(() => {
    return `/src/assets/rank_logo/${props.rank.tier}.png`
})
</script>

<style scoped>
.rank-logo {
    width: 120px;
    height: 120px;
}

.rank-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style> 