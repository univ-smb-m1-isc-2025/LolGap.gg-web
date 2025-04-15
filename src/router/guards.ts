import type { Router } from 'vue-router'
import { useAuthStore } from '../stores/auth/auth.store'

export function setupRouterGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        const authStore = useAuthStore()
        const isAuthenticated = authStore.isAuthenticated

        console.log(isAuthenticated)

        if (to.meta.requiresAuth && !isAuthenticated) {
            next('/auth')
        } else {
            next()
        }
    })
} 