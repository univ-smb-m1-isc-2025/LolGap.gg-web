<template>
    <button
        :class="['button', `button--${variant}`]"
        @click="$emit('click')"
        :type="type"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    variant?: 'primary' | 'secondary' | 'danger'
    type?: 'button' | 'submit' | 'reset'
}>()

defineEmits<{
    (e: 'click'): void
}>()
</script>

<style scoped>
.button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
}

.button--primary {
    background-color: var(--primary-color);
    color: white;
}

.button--secondary {
    background-color: var(--background-secondary);
    color: var(--text-primary);
}

.button--danger {
    background-color: var(--danger-color);
    color: white;
}
</style> 