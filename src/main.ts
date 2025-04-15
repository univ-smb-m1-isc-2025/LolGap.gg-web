import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth/auth.store'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Check authentication before mounting the app
const authStore = useAuthStore()
authStore.checkAuth().then(() => {
  app.mount('#app')
})
