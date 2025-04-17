<template>
    <div class="register-view">
        <div class="register-card">
            <h2 class="register-title">Create Account</h2>
            <div class="register-form">
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
                <TextInput
                    id="riotGameName"
                    v-model="riotGameName"
                    label="Riot Game Name"
                    placeholder="Enter your Riot game name"
                    required
                />
                <TextInput
                    id="riotTagLine"
                    v-model="riotTagLine"
                    label="Riot Tag Line"
                    placeholder="Enter your Riot tag line (e.g., EUW)"
                    required
                />
                <RegisterButton 
                    :username="username"
                    :password="password"
                    :riotGameName="riotGameName"
                    :riotTagLine="riotTagLine"
                />
                <div class="switch-form">
                    <p>Already have an account?</p>
                    <button @click="switchToLogin" class="switch-button">Sign in</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TextInput from './TextInput.vue'
import RegisterButton from '../auth/RegisterButton.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const riotGameName = ref('')
const riotTagLine = ref('')

const switchToLogin = () => {
    router.push('/login')
}
</script>

<style scoped>
.register-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.register-card {
    max-width: 28rem;
    width: 100%;
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.register-title {
    margin-top: 1.2rem;
    text-align: center;
    font-size: 1.675rem;
    font-weight: 800;
    color: #111827;
}

.register-form {
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