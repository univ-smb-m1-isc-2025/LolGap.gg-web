<template>
    <nav class="nav-bar">
        <div class="container">
            <div class="nav-content">
                <div class="logo">lolgap.gg</div>
                
                <div v-if="isAuthenticated" class="nav-menu">
                    <router-link to="/" class="nav-menu-item" :class="{ active: $route.path === '/' }">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span>Home</span>
                    </router-link>
                    <router-link to="/groups" class="nav-menu-item" :class="{ active: $route.path === '/groups' }">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>Groups</span>
                    </router-link>
                    <router-link to="/notifications" class="nav-menu-item" :class="{ active: $route.path === '/notifications' }">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        <span>Notifications</span>
                    </router-link>
                </div>
                
                <div class="nav-items">
                    <div v-if="isAuthenticated" class="nav-user-info">
                        <span>{{ authStore.account?.riotGameName }}#{{ authStore.account?.riotTagLine }}</span>
                        <UserProfilPic />
                    </div>
                    <router-link v-if="!isAuthenticated" to="/login" class="nav-link">Login</router-link>
                    <LogoutButton v-else />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '../../stores/auth/auth.store'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import LogoutButton from '../auth/LogoutButton.vue'
import UserProfilPic from '../user/UserProfilPic.vue'

const authStore = useAuthStore()
const router = useRouter()

const isAuthenticated = computed(() => authStore.isAuthenticated)

const handleLogout = () => {
    authStore.logout()
    router.push('/login')
}
</script>

<style scoped>
.nav-bar {
    position: fixed;
    top: 1rem;
    left: 0;
    right: 0;
    z-index: 1000;
    text-align: left;
    margin: 0;
    padding: 0;
}

.nav-user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.nav-bar .container {
    background-color: white;
    padding: 1rem var(--container-padding);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    margin: 0;
    margin-left: var(--container-margin);
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
}

.logo {
    font-size: 1.5rem;
    font-weight: 600;
    color: #4f46e5;
    margin: 0;
    padding: 0;
}

.nav-menu {
    display: flex;
    gap: 1rem;
    margin: 0 2rem;
}

.nav-menu-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    color: #4b5563;
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.2s ease;
    height: 40px;
}

.nav-menu-item:hover {
    background-color: #f3f4f6;
    color: #1f2937;
}

.nav-menu-item.active {
    background-color: #e5e7eb;
    color: #1f2937;
}

.nav-menu-item .icon {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
    fill: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-menu-item span {
    font-size: 14px;
    font-weight: 500;
}

.nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
}

.nav-link {
    text-decoration: none;
    color: #4f46e5;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: all 0.2s;
}

.nav-link:hover {
    background-color: #f3f4f6;
}

.nav-button {
    background-color: #4f46e5;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
}

.nav-button:hover {
    background-color: #4338ca;
}
</style> 