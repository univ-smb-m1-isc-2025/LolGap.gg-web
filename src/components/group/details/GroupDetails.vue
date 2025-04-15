<template>
    <div class="group-details">
        <div class="group-header">
            <h2>{{ groupStore.selectedGroup?.name }}</h2>
            <div class="group-actions">
                <InviteMember v-if="isOwner" :groupId="groupStore.selectedGroup!.id" />
            </div>
        </div>

        <div class="group-content">
            <MemberList 
                :members="groupMembers"
                @member-click="handleMemberClick"
                @status-click="handleStatusClick"
            />
        </div>

        <UpdateMemberStatus
            v-if="selectedMember"
            :member="selectedMember"
            @close="handleCloseUpdate"
            @updated="handleMemberUpdated"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Group, GroupMember } from '../../../types/group'
import MemberList from '../../member/list/MemberList.vue'
import UpdateMemberStatus from '../../member/update/UpdateMemberStatus.vue'
import InviteMember from '../../invitation/InviteMember.vue'
import { useGroupStore } from '../../../stores/group/group.store'
import { useAuthStore } from '../../../stores/auth/auth.store'

const props = defineProps<{
    group: Group
}>()

const emit = defineEmits<{
    (e: 'rename'): void
    (e: 'delete'): void
}>()

const groupStore = useGroupStore()
const authStore = useAuthStore()
const selectedMember = ref<GroupMember | null>(null)

const groupMembers = computed(() => groupStore.selectedGroup?.members || [])

const handleRename = () => {
    emit('rename')
}

const handleDelete = () => {
    emit('delete')
}

const handleMemberClick = (member: GroupMember) => {
    selectedMember.value = member
}

const handleStatusClick = (member: GroupMember) => {
    selectedMember.value = member
}

const handleMemberUpdated = (updatedMember: GroupMember) => {
    if (groupStore.selectedGroup) {
        const index = groupStore.selectedGroup.members.findIndex(m => m.id === updatedMember.id)
        if (index !== -1) {
            groupStore.selectedGroup.members[index] = updatedMember
        }
    }
    selectedMember.value = null
}

const handleCloseUpdate = () => {
    selectedMember.value = null
}

const isOwner = computed(() => {
    return groupStore.selectedGroup?.owner.id === authStore.account?.id
})

const handleLeave = () => {
    // Implementation of handleLeave function
}
</script>

<style scoped>
.group-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    background-color: white;
}

.group-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
}

.group-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.group-name {
    font-size: 24px;
    font-weight: 600;
    color: #1f2937;
    margin: 0;
}

.group-actions {
    display: flex;
    gap: 8px;
}

.action-button {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: #f3f4f6;
    border: 1px solid #e5e7eb;
    color: #4b5563;
}

.action-button:hover {
    background-color: #e5e7eb;
}

.action-button.danger {
    background-color: #fee2e2;
    border-color: #fecaca;
    color: #991b1b;
}

.action-button.danger:hover {
    background-color: #fecaca;
}

.group-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 16px;
}

.members-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.invite-section {
    margin-top: 16px;
    padding: 16px;
    background-color: #f9fafb;
    border-radius: 8px;
}

h3 {
    margin: 0 0 16px 0;
    font-size: 18px;
    color: #1f2937;
}
</style> 