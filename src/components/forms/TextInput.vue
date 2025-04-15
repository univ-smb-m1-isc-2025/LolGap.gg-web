<template>
    <div class="input-container">
        <label :for="id" class="input-label">{{ label }}</label>
        <input
            :id="id"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            :placeholder="placeholder"
            :required="required"
            class="input-field"
        />
        <div v-if="error" class="error-message">
            <svg class="error-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <span>{{ error }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    id: string
    modelValue: string
    label: string
    type?: string
    placeholder?: string
    required?: boolean
    error?: string
}

withDefaults(defineProps<Props>(), {
    type: 'text',
    required: false
})

defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped>
.input-container {
    display: flex;
    flex-direction: column;
}

.input-label {
    display: block;
    color: #6b7280;
    font-weight: 700;
    margin-bottom: 0.25rem;
    padding-right: 1rem;
}

.input-field {
    display: block;
    padding: 0.375rem 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    background-color: white;
    color: #111827;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.input-field:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
}

.error-message {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #dc2626;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.error-icon {
    width: 1.25rem;
    height: 1.25rem;
    color: #dc2626;
}
</style>