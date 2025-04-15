export interface Group {
    id: number
    name: string
    owner: {
        id: number
        username: string
    }
    members: GroupMember[]
}

export interface GroupMember {
    id: number
    account: {
        id: number
        username: string
    }
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
}

export interface Invitation {
    id: number
    group: {
        id: number
        name: string
    }
    sender: {
        id: number
        username: string
    }
    receiver: {
        id: number
        username: string
    }
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
    createdAt: string
    updatedAt: string
}

export interface CreateGroupRequest {
    name: string
}

export interface RenameGroupRequest {
    name: string
}

export interface RespondToInvitationRequest {
    accept: boolean
} 