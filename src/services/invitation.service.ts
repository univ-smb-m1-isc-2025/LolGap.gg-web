import api from './api'
import type { Invitation } from '../types/group'

export class InvitationService {
    private static instance: InvitationService

    private constructor() {}

    public static getInstance(): InvitationService {
        if (!InvitationService.instance) {
            InvitationService.instance = new InvitationService()
        }
        return InvitationService.instance
    }

    async getUserInvitations(): Promise<any[]> {
        const response = await api.get('/api/invitations')
        return response.data
    }

    async getGroupInvitations(groupId: number): Promise<Invitation[]> {
        const response = await api.get<Invitation[]>(`/api/groups/${groupId}/invitations`)
        return response.data
    }

    async inviteMember(groupId: number, username: string): Promise<Invitation> {
        const response = await api.post<Invitation>(`/api/groups/${groupId}/invitations/${username}`)
        return response.data
    }

    async respondToInvitation(invitationId: number, accept: boolean): Promise<void> {
        await api.post(`/api/invitations/${invitationId}/respond`, { accept })
    }
} 