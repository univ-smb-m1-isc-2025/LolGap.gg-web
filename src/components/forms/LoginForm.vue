<template>
    <div class="login-view">
        <div class="login-card">
            <h2 class="login-title">Sign in</h2>
            <div class="login-form">
                <TextInput
                    id="username"
                    v-model="username"
                    label="Username"
                    placeholder="Enter your username"
                    required
                />
                <TextInput
                    id="password"
                    v-model="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    required
                />
                <LoginButton :username="username" :password="password" />
                <div class="switch-form">
                    <p>Don't have an account?</p>
                    <button @click="switchToRegister" class="switch-button">Create account</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TextInput from './TextInput.vue'
import LoginButton from '../auth/LoginButton.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

const switchToRegister = () => {
    router.push('/register')
}
</script>

<style scoped>
.login-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-card {
    max-width: 28rem;
    width: 100%;
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.login-title {
    margin-top: 1.2rem;
    text-align: center;
    font-size: 1.675rem;
    font-weight: 800;
    color: #111827;
}

.login-form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.switch-form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
}

.switch-button {
    color: #3b82f6;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
}

.switch-button:hover {
    text-decoration: underline;
}
</style> 