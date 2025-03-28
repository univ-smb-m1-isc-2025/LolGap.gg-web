<script setup>

</script>

<template>
    <RouterLink to="/login">
        <button class="login-button">
            <p>LOGIN</p>
            <img src="@/assets/icon/user_icon.png" alt="login" class="login-icon"/>
        </button>
    </RouterLink>
</template>

<style scoped>
    .login-button {
        background-color: var(--color-primary-white);
        border-radius: 15px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        max-width: 200px;
        max-height: 100px;
        border: 1px solid var(--color-primary-white);
        cursor: pointer;
        color: black;
        font-size: 1.2rem;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .login-button:hover {
        background-color: rgba(255, 255, 255, 0);
        color: var(--color-primary-white);
        border: 1px solid var(--color-primary-white);
        transform: scale(1.05);
        transition: all 0.3s ease;
    }

    .login-icon {
        max-width: 40px;
        max-height: 40px;
    }
</style>
