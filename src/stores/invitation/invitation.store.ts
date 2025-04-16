import { defineStore } from 'pinia'
import { ref } from 'vue'
import { InvitationService } from '../../services/invitation.service'
import type { Invitation } from '../../types/group'

export const useInvitationStore = defineStore('invitation', () => {
    const invitations = ref<Invitation[]>([])
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    const invitationService = InvitationService.getInstance()

    const fetchMyInvitations = async () => {
        isLoading.value = true
        error.value = null
        try {
            invitations.value = await invitationService.getUserInvitations()
        } catch (err) {
            error.value = 'Erreur lors du chargement des invitations'
            console.error(err)
        } finally {
            isLoading.value = false
        }
    }

    const inviteMember = async (groupId: number, username: string) => {
        isLoading.value = true
        error.value = null
        try {
            const invitation = await invitationService.inviteMember(groupId, username)
            return invitation
        } catch (err) {
            error.value = 'Erreur lors de l\'invitation du membre'
            console.error(err)
            throw err
        } finally {
            isLoading.value = false
        }
    }

    const respondToInvitation = async (invitationId: number, accept: boolean) => {
        isLoading.value = true
        error.value = null
        try {
            const invitation = await invitationService.respondToInvitation(invitationId, accept)
            invitations.value = invitations.value.filter(i => i.id !== invitationId)
            return invitation
        } catch (err) {
            error.value = 'Erreur lors de la réponse à l\'invitation'
            console.error(err)
            throw err
        } finally {
            isLoading.value = false
        }
    }

    return {
        invitations,
        isLoading,
        error,
        fetchMyInvitations,
        inviteMember,
        respondToInvitation
    }
}) 