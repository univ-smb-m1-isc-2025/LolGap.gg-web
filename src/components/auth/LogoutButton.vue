<template>
    <button
        @click="handleLogout"
        class="logout-button"
        type="button"
    >
        Logout
    </button>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../stores/auth/auth.store'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
    authStore.logout()
    router.push('/auth')
}
</script>

<style scoped>
.logout-button {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    background-color: #4f46e5;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.logout-button:hover {
    background-color: #4338ca;
}

.logout-button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.5);
}
</style>