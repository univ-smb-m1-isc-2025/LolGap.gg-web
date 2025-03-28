<script setup>
import { useAuthStore } from '@/stores/authStore';
import queueService from '@/services/queueService';
import { ref, onMounted } from 'vue';
import MiniMatchRecap from './MiniMatchRecap.vue';

const authStore = useAuthStore();
const ranks = ref([]);

onMounted(async () => {
    if (authStore.isAuthenticated) {
        await authStore.getRanks();
        ranks.value = authStore.leagueRanks;
    }
});

const getRankImage = (tier) => {
    return new URL(`../assets/rank/${tier.toLowerCase()}.png`, import.meta.url).href;
};

</script>

<template>
    <div class="ranks-container">
        <div v-for="rank in ranks" :key="rank.id" class="rank_level_container">
            <div class="rank_level">
                <div class="rank_picture">
                    <img :src="getRankImage(rank.tier)" alt="Rank Image" class="rank_picture_image">
                </div>
                <div class="rank_level_title">
                    <h4>{{ rank.tier }}</h4>
                    <h4>{{ rank.rank }}</h4>
                </div>
                <i class="rank_level_stats_lp">{{ rank.leaguePoints }} LP</i>
            </div>
            <p class="rank_level_queue_name">{{ queueService.getDisplayName(rank.queueType) }}</p>
            <MiniMatchRecap :queueType="rank.queueType" />
            <div class="rank_level_stats">
                <h1 class="rank_level_stats_win">{{ rank.wins }}</h1> <span class="rank_level_stats_win_span">/</span>
                <h1 class="rank_level_stats_lose">{{ rank.losses }}</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>  
    .ranks-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: 1 / 3 / 3 / 6;
        background-color: var(--color-frame-background-soft);
        border-radius: 15px;
        padding: 10px;
        margin: 2%;
    }

    .rank_level {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: center;
        width: 35%;
    }

    .rank_level h4 {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--color-primary-white);
    }

    .rank_level_title {
        display: flex;
        flex-direction: row;
        gap: 10px;
        background-color: var(--color-markdown-title);
        border-radius: 5px;
        padding: 1% 5%;
    }

    .rank_level_stats {
        display: flex;
        flex-direction: row;
        gap: 10px;
        font-size: 0.7rem;
        font-weight: bold;
    }

    .rank_level_stats_win {
        color: var(--victory);
    }

    .rank_level_stats_lose {
        color: var(--defeat);
    }

    .rank_level_stats_win_span {
        color: var(--color-primary-white);
        font-size: 1.2rem;
        font-weight: bold;
    }

    .rank_level_container {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        padding: 1% 5%;
        width: 100%;
    }

    .rank_level_stats_lp {
        width: 100px;
        display: inline;
        font-size: 0.9rem;
        font-weight: bold;
        color: var(--color-primary-white);
    }

    .rank_picture_image {
        max-width: 100px;
        max-height: 100px;
        object-fit: cover;
    }

    .rank_level_queue_name {
        font-size: 0.9rem;
        font-weight: bold;
        color: var(--color-primary-white);
        text-align: left;
        width: 15%;
    }
</style>

