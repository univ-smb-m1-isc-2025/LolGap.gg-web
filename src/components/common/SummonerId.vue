<template>
    <div class="id-container">
        <div class="info-item">
            <h3 class="info-label">Summoner ID</h3>
            <Copyable :value="value">
                <p class="info-value">{{ value }}</p>
            </Copyable>
        </div>
    </div>
</template>

<script setup lang="ts">
import Copyable from './Copyable.vue'

defineProps<{
    value: string
}>()
</script>

<style scoped>
.id-container {
    width: 100%;
}

.info-item {
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem 1rem 0rem;
}

.info-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
}

.info-value {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: #111827;
    line-height: 1.5;
}
</style> 