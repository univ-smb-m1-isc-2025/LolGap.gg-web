<template>
    <div class="copyable-container">
        <slot></slot>
        <button @click="copyToClipboard" class="copy-button">
            <span class="copy-icon">⎘</span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    value: string
}>()

const copied = ref(false)

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(props.value)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy text: ', err)
    }
}
</script>

<style scoped>
.copyable-container {
    display: flex;
    align-items: center;
    gap: 8px;
}

.copy-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.2s;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
}

.copy-button:hover {
    opacity: 1;
}

.copy-icon {
    font-size: 1.5rem;
    color: #6b7280;
    line-height: 1;
}
</style> 