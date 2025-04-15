import { api } from '../api'
import type { Group, GroupMember, Invitation, CreateGroupRequest, RenameGroupRequest, RespondToInvitationRequest } from '../types/group'

export class GroupService {
    private static instance: GroupService
    private readonly baseUrl = '/groups'

    private constructor() {}

    public static getInstance(): GroupService {
        if (!GroupService.instance) {
            GroupService.instance = new GroupService()
        }
        return GroupService.instance
    }

    async getMyGroups(): Promise<Group[]> {
        const response = await api.get('/api/groups/myGroups')
        return response.data
    }

    async getGroupWithMembers(groupId: number): Promise<Group> {
        const [groupResponse, membersResponse] = await Promise.all([
            api.get(`/api/groups/${groupId}`),
            api.get(`/api/groups/${groupId}/members`)
        ])
        return {
            ...groupResponse.data,
            members: membersResponse.data
        }
    }

    async createGroup(name: string): Promise<Group> {
        const response = await api.post('/api/groups', { name })
        return response.data
    }

    async getGroupDetails(groupId: string): Promise<Group> {
        const response = await api.get(`/groups/${groupId}`)
        return response.data
    }

    async inviteMember(groupId: number, username: string): Promise<void> {
        await api.post(`${this.baseUrl}/${groupId}/invite/${username}`)
    }

    async respondToInvitation(groupId: number, request: RespondToInvitationRequest): Promise<void> {
        await api.post(`${this.baseUrl}/${groupId}/respond`, request)
    }

    async removeMember(groupId: number, username: string): Promise<void> {
        await api.delete(`${this.baseUrl}/${groupId}/members/${username}`)
    }

    async renameGroup(groupId: number, newName: string): Promise<Group> {
        const response = await api.put(`/api/groups/${groupId}`, { name: newName })
        return response.data
    }

    async deleteGroup(groupId: number): Promise<void> {
        await api.delete(`/api/groups/${groupId}`)
    }

    async getGroupInvitations(groupId: number): Promise<Invitation[]> {
        const response = await api.get<Invitation[]>(`${this.baseUrl}/${groupId}/invitations`)
        return response.data
    }

    async getGroupMembers(groupId: number): Promise<GroupMember[]> {
        const response = await api.get(`/api/groups/${groupId}/members`)
        return response.data
    }

    async leaveGroup(groupId: number): Promise<void> {
        await api.delete(`/api/groups/${groupId}/leave`)
    }
}

export const groupService = GroupService.getInstance() 