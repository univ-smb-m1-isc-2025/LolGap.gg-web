import { createRouter, createWebHistory } from 'vue-router'
import { setupRouterGuards } from './guards'
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import GroupsView from '../views/groups/GroupsView.vue'
import NotificationsView from '../views/notifications/NotificationsView.vue'
import { useAuthStore } from '../stores/auth/auth.store'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { requiresAuth: true }
        },
        {
            path: '/auth',
            name: 'auth',
            component: LoginView,
            meta: { requiresAuth: false }
        },
        {
            path: '/groups',
            name: 'groups',
            component: GroupsView,
            meta: { requiresAuth: true }
        },
        {
            path: '/notifications',
            name: 'notifications',
            component: NotificationsView,
            meta: { requiresAuth: true }
        }
    ]
})

// Setup navigation guards
setupRouterGuards(router)

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router
