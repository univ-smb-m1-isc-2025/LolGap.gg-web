<template>
    <div class="invite-member">
        <div class="invite-form">
            <input
                v-model="username"
                type="text"
                placeholder="Nom d'utilisateur"
                class="invite-input"
                @keyup.enter="handleInvite"
            />
            <button class="invite-button" @click="handleInvite" :disabled="!username.trim()">
                Inviter
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useInvitationStore } from '../../stores/invitation/invitation.store'

const props = defineProps<{
    groupId: number
}>()

const username = ref('')
const invitationStore = useInvitationStore()

const handleInvite = async () => {
    if (!username.value.trim()) return
    
    try {
        await invitationStore.inviteMember(props.groupId, username.value)
        username.value = ''
    } catch (error) {
        console.error('Erreur lors de l\'invitation:', error)
    }
}
</script>

<style scoped>
.invite-member {
    display: flex;
    align-items: center;
}

.invite-form {
    display: flex;
    gap: 8px;
    align-items: center;
}

.invite-input {
    padding: 8px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 14px;
    height: 36px;
}

.invite-input:focus {
    outline: none;
    border-color: #3b82f6;
}

.invite-button {
    padding: 8px 16px;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease;
    height: 36px;
}

.invite-button:hover {
    background-color: #2563eb;
}

.invite-button:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
}
</style> 