<template>
    <div class="match-status">
        <span class="match-status-text">{{ win ? 'V' : 'D' }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    win: boolean
}>()
</script>

<style scoped>
.match-status {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: v-bind('win ? "#22c55e" : "#ef4444"');
}

.match-status-text {
    color: white;
    font-weight: bold;
}
</style> 