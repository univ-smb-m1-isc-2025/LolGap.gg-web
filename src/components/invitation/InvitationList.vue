<template>
    <div class="invitation-list">
        <h3>Invitations en attente</h3>
        <div v-if="pendingInvitations.length === 0" class="no-invitations">
            Aucune invitation en attente
        </div>
        <div v-else class="invitations">
            <Invitation
                v-for="invitation in pendingInvitations"
                :key="invitation.id"
                :invitation="invitation"
                @updated="fetchInvitations"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { InvitationService } from '../../services/invitation.service'
import Invitation from './Invitation.vue'

const invitationService = InvitationService.getInstance()
const pendingInvitations = ref<any[]>([])

const fetchInvitations = async () => {
    try {
        const invitations = await invitationService.getUserInvitations()
        pendingInvitations.value = invitations.filter(inv => inv.status === 'PENDING')
    } catch (error) {
        console.error('Erreur lors du chargement des invitations:', error)
        alert('Erreur lors du chargement des invitations')
    }
}

onMounted(() => {
    fetchInvitations()
})
</script>

<style scoped>
.invitation-list {
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.invitation-list h3 {
    margin-bottom: 16px;
    color: #1f2937;
    font-size: 18px;
    font-weight: 600;
}

.no-invitations {
    color: #6b7280;
    text-align: center;
    padding: 20px;
}

.invitations {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style> 