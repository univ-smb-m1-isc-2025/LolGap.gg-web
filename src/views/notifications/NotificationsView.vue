<template>
    <div class="notifications-view">
        <h2>Notifications</h2>
        <InvitationList />
    </div>
</template>

<script setup lang="ts">
import InvitationList from '../../components/invitation/InvitationList.vue'
</script>

<style scoped>
.notifications-view {
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
}

.notifications-view h2 {
    margin-bottom: 24px;
    color: #1f2937;
    font-size: 24px;
    font-weight: 600;
}
</style> 