<template>
    <div class="invitation">
        <div class="invitation-info">
            <span class="group-name">{{ invitation.group.name }}</span>
            <span class="inviter">Invité par {{ invitation.inviter.username }}</span>
        </div>
        <div class="invitation-actions">
            <button class="accept-button" @click="handleAccept">Accepter</button>
            <button class="reject-button" @click="handleReject">Refuser</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { InvitationService } from '../../services/invitation.service'

const props = defineProps<{
    invitation: {
        id: number
        group: {
            id: number
            name: string
        }
        inviter: {
            id: number
            username: string
        }
        status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
    }
}>()

const emit = defineEmits<{
    (e: 'updated'): void
}>()

const invitationService = InvitationService.getInstance()

const handleAccept = async () => {
    try {
        await invitationService.respondToInvitation(props.invitation.id, true)
        emit('updated')
    } catch (error) {
        console.error('Erreur lors de l\'acceptation de l\'invitation:', error)
        alert('Erreur lors de l\'acceptation de l\'invitation')
    }
}

const handleReject = async () => {
    try {
        await invitationService.respondToInvitation(props.invitation.id, false)
        emit('updated')
    } catch (error) {
        console.error('Erreur lors du refus de l\'invitation:', error)
        alert('Erreur lors du refus de l\'invitation')
    }
}
</script>

<style scoped>
.invitation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: white;
    margin-bottom: 8px;
}

.invitation-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.group-name {
    font-weight: 600;
    color: #1f2937;
}

.inviter {
    color: #6b7280;
    font-size: 14px;
}

.invitation-actions {
    display: flex;
    gap: 8px;
}

.accept-button, .reject-button {
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.accept-button {
    background-color: #dcfce7;
    color: #166534;
    border: none;
}

.accept-button:hover {
    background-color: #bbf7d0;
}

.reject-button {
    background-color: #fee2e2;
    color: #991b1b;
    border: none;
}

.reject-button:hover {
    background-color: #fecaca;
}
</style> 