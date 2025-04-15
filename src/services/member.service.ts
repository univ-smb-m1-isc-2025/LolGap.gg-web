import api from './api'
import type { GroupMember } from '../types/group'

export class MemberService {
    private static instance: MemberService

    private constructor() {}

    public static getInstance(): MemberService {
        if (!MemberService.instance) {
            MemberService.instance = new MemberService()
        }
        return MemberService.instance
    }

    async getGroupMembers(groupId: number): Promise<GroupMember[]> {
        const response = await api.get<GroupMember[]>(`/api/groups/${groupId}/members`)
        return response.data
    }

    async removeMember(groupId: number, username: string): Promise<void> {
        await api.delete(`/api/groups/${groupId}/members/${username}`)
    }

    async updateMemberStatus(groupId: number, memberName: string, status: string): Promise<void> {
        await api.put(`/api/groups/${groupId}/members/${memberName}/status`, { status })
    }
} 