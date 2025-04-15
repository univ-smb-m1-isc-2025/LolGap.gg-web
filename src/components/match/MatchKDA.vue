<template>
    <div class="match-kda">
        <span class="kills">{{ kills }}</span>
        <span class="separator">/</span>
        <span class="deaths">{{ deaths }}</span>
        <span class="separator">/</span>
        <span class="assists">{{ assists }}</span>
        <span class="ratio">({{ kdaRatio }})</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    kills: number
    deaths: number
    assists: number
}>()

const kdaRatio = computed(() => {
    if (props.deaths === 0) return 'Perfect'
    return ((props.kills + props.assists) / props.deaths).toFixed(2)
})
</script>

<style scoped>
.match-kda {
    display: flex;
    align-items: center;
    gap: 8px;
}

.kills, .assists {
    font-weight: bold;
}

.deaths {
    color: #ef4444;
    font-weight: bold;
}

.separator {
    color: #6b7280;
}

.ratio {
    color: #6b7280;
}
</style> 