<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')

const handleSubmit = async (e) => {
  e.preventDefault()
  error.value = ''
  
  try {
    await authStore.login(username.value, password.value)
    router.push('/')
  } catch (err) {
    error.value = err.response?.data || 'Erreur de connexion'
  }
}
</script>

<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card bg-dark text-light border-secondary">
            <div class="card-body p-4">
              <!-- Header -->
              <div class="text-center mb-4">
                <h1 class="h3">Bienvenue sur LoLGap.gg</h1>
                <p class="text-secondary">Connectez-vous pour accéder à votre compte</p>
              </div>

              <!-- Error Message -->
              <div 
                v-if="error" 
                class="alert alert-danger"
              >
                {{ error }}
              </div>

              <!-- Login Form -->
              <form @submit="handleSubmit" class="d-flex flex-column gap-3">
                <div class="form-group">
                  <label class="form-label">Nom d'utilisateur</label>
                  <input
                    v-model="username"
                    type="text"
                    required
                    class="form-control bg-dark text-light border-secondary"
                    placeholder="Entrez votre nom d'utilisateur"
                  >
                </div>

                <div class="form-group">
                  <label class="form-label">Mot de passe</label>
                  <input
                    v-model="password"
                    type="password"
                    required
                    class="form-control bg-dark text-light border-secondary"
                    placeholder="Entrez votre mot de passe"
                  >
                </div>

                <button
                  type="submit"
                  :disabled="authStore.loading"
                  class="btn btn-primary w-100"
                >
                  <span v-if="authStore.loading">
                    <span class="spinner-border spinner-border-sm me-2"></span>
                    Connexion en cours...
                  </span>
                  <span v-else>Se connecter</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2rem;
}
</style>
