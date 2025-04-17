<template>
    <div class="register-container">
        <button
            class="register-button"
            :disabled="!isFormValid"
            @click="handleRegister"
            type="button"
        >
            <span class="button-icon">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            </span>
            Create Account
        </button>
        <div v-if="error" class="error-container">
            <svg class="error-icon" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <span class="error-message">{{ error }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth/auth.store'

const props = defineProps<{
    username: string
    password: string
    riotGameName: string
    riotTagLine: string
}>()

const toast = useToast()
const router = useRouter()
const authStore = useAuthStore()
const error = ref<string>('')

const isFormValid = computed(() => {
    return props.username && props.password && props.riotGameName && props.riotTagLine
})

const handleRegister = async () => {
    try {
        await authStore.register({
            username: props.username,
            password: props.password,
            riotGameName: props.riotGameName,
            riotTagLine: props.riotTagLine
        })
        toast.success('Account created successfully!')
        router.push('/login')
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to create account'
        toast.error(errorMessage)
        error.value = errorMessage
    }
}
</script>

<style scoped>
.register-container {
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
}

.register-button {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
    background: linear-gradient(to right, #4f46e5, #4338ca);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.register-button:hover:not(:disabled) {
    background: linear-gradient(to right, #4338ca, #3730a3);
    transform: scale(1.02);
}

.register-button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5);
}

.register-button:disabled {
    background: linear-gradient(to right, #a5b4fc, #818cf8);
    cursor: not-allowed;
    transform: none;
}

.button-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding-left: 0.75rem;
}

.icon {
    width: 1.25rem;
    height: 1.25rem;
    color: #a5b4fc;
}

.register-button:hover:not(:disabled) .icon {
    color: #c7d2fe;
}

.error-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
}

.error-icon {
    width: 12px;
    height: 12px;
    fill: none;
    stroke: #dc2626;
}

.error-message {
    color: #dc2626;
    font-size: 12px;
}
</style> 