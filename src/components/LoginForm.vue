<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const username = ref('');
const password = ref('');
const riotGameName = ref('');
const riotTagLine = ref('');
const error = ref('');

const handleSubmit = async (e) => {
    e.preventDefault();
    error.value = '';
    
    try {
        await authStore.login(username.value, password.value);
        router.push('/');
    } catch (err) {
        error.value = err.response?.data || 'Erreur de connexion';
    }
};
</script>

<template>
    <form @submit="handleSubmit" class="login-form">
        <div v-if="error" class="error-message">{{ error }}</div>
        
        <input 
            v-model="username"
            type="text" 
            placeholder="Username" 
            class="login-input"
            required
        >
        
        <input 
            v-model="password"
            type="password" 
            placeholder="Password" 
            class="login-input"
            required
        >
        
        <button 
            type="submit" 
            class="login-submit"
            :disabled="authStore.loading"
        >
            {{ authStore.loading ? 'Connexion...' : 'Se connecter' }}
        </button>
    </form>
</template>

<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 300px;
    padding: 2rem;
    background-color: var(--color-frame-background);
    border-radius: 15px;
}

.login-input {
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid var(--color-primary-white);
    background-color: transparent;
    color: var(--color-primary-white);
}

.login-submit {
    padding: 0.8rem;
    border-radius: 8px;
    background-color: var(--color-primary-white);
    color: black;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid var(--color-primary-white);
    transition: all 0.3s ease;
}

.login-submit:hover {
    background-color: transparent;
    color: var(--color-primary-white);
    transform: scale(1.05);
    transition: all 0.3s ease;
}

.login-input:focus {
    outline: none;
}

.error-message {
    color: #ff4444;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 0.9rem;
}
</style>
