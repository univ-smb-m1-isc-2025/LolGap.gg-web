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
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TextInput from './TextInput.vue'
import LoginButton from '../auth/LoginButton.vue'
import { ref } from 'vue'
const username = ref('')
const password = ref('')
</script>

<style scoped>


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
</style> 