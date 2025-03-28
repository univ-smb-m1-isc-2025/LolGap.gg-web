<script setup>
	import { RouterLink, RouterView } from 'vue-router'
    import LoginButton from './components/LoginButton.vue'
    import { useAuthStore } from '@/stores/authStore'
    import { computed } from 'vue'
    import ProfileIcon from '@/components/ProfileIcon.vue'

    const authStore = useAuthStore()

    const usernameDisplay = computed(() => {
        if (authStore.isAuthenticated && authStore.user) {
            return authStore.user.username
        }
        return null
    })

    const riotGameDisplay = computed(() => {
        if (authStore.isAuthenticated && authStore.user) {
            return authStore.user.riotGameName + " #" + authStore.user.riotTagLine
        }
        return null
    })
    

    const handleLogout = () => {
        authStore.logout()
    }
</script>

<template>
  <div class="vh-100 bg-dark w-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary w-100">
      <div class="container-fluid px-4 w-100">
        <div class="navbar-nav me-auto">
          <RouterLink 
            v-for="item in ['HOME', 'GROUPS', 'FRIENDS']" 
            :key="item"
            to="/"
            class="nav-link"
          >
            {{ item }}
          </RouterLink>
        </div>
        
        <div class="d-flex align-items-center">
          <template v-if="!authStore.isAuthenticated">
            <span class="text-secondary me-3">Log in to see your league account</span>
            <LoginButton />
          </template>
          <template v-else>
            <div class="d-flex align-items-center gap-3">
              <span class="text-light">{{ authStore.user?.username }}</span>
              <ProfileIcon />
              <button 
                @click="handleLogout"
                class="btn btn-outline-light"
              >
                Déconnexion
              </button>
            </div>
          </template>
        </div>
      </div>
    </nav>

    <main class="w-100 p-4">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Reset des styles par défaut qui pourraient limiter la largeur */
#app {
  width: 100vw !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.container-fluid {
  max-width: none !important;
  padding: 0 2rem;
}

	.header-container {
		position: fixed;
		top: 1%;
		left: 2.5%;
		height: 3vw;
		background-color: var(--color-frame-background);
		width: 95%;
        padding: 2% 1%;
		margin: 0 auto;
		border-radius: 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;
	}

	.main {
		background-color: var(--color-frame-background);
		position: fixed;
		top: 5vw;
		left: 2.5%;
		width: 95%;
		border-radius: 15px;
		min-height: 90vh;
	}

    .header-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        font-size: 0.8rem;
        font-weight: bold;
    }

    .header-title h1 {
        cursor: pointer;
    }

    .header-login-text {
        font-size: 0.8rem;
        font-weight: bold;
    }

    .header-login {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .user-info {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .username {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--color-primary-white);
    }

    .logout-button {
        background-color: var(--color-primary-white);
        border-radius: 15px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-primary-white);
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .logout-button:hover {
        background-color: rgba(255, 255, 255, 0);
        border: 1px solid var(--color-primary-white);
        transform: scale(1.05);
    }

    .login-icon {
        max-width: 40px;
        max-height: 40px;
    }

.navbar {
  height: 56px; /* Hauteur fixe pour la navbar */
}

/* header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
} */
</style>
