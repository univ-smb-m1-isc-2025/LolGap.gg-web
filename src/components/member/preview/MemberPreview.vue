<template>
    <div class="member-preview" @click="handleClick">
        <div class="member-info">
            <span class="member-name">{{ member.account.username }}</span>
            <div 
                class="member-status" 
            >
                <span v-if="isOwner" class="crown-emoji">👑</span>
                <span @click.stop="handleStatusClick" class="status-text">{{ member.status }}</span>
            </div>
        </div>
    </div>
    <MemberDetailsModal 
        :isOpen="showModal" 
        :memberId="member.account.id" 
        @close="showModal = false" 
    />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { GroupMember } from '../../../types/group'
import { useGroupStore } from '../../../stores/group/group.store'
import { useAuthStore } from '../../../stores/auth/auth.store'
import MemberDetailsModal from '../details/MemberDetailsModal.vue'

const props = defineProps<{
    member: GroupMember
}>()

const emit = defineEmits<{
    (e: 'member-click', member: GroupMember): void
    (e: 'status-click', member: GroupMember): void
}>()

const groupStore = useGroupStore()
const authStore = useAuthStore()
const showModal = ref(false)

const isOwner = computed(() => {
    return Number(props.member.account.id) === Number(groupStore.selectedGroup?.owner.id)
})

const handleClick = () => {
    showModal.value = true
}

const handleStatusClick = (event: MouseEvent) => {
    event.stopPropagation()
    if (groupStore.selectedGroup?.owner.id === authStore.account?.id) {
        emit('status-click', props.member)
    }
}
</script>

<style scoped>
.member-preview {
    padding: 12px 16px;
    margin: 4px 8px;
    border-radius: 6px;
    transition: all 0.2s ease;
    cursor: pointer;
    background-color: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.member-preview:hover {
    background-color: #f3f4f6;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.member-preview:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.member-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
}

.member-name {
    font-size: 14px;
    color: #1f2937;
    font-weight: 500;
}

.member-status {
    font-size: 12px;
    color: #6b7280;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 4px 8px;
    border-radius: 12px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
}

.status-text {
    background-color: #4f46e5;
    color: white;
    padding: 0.3rem;
    border-radius: 0.5rem;
}

.member-status:hover {
    opacity: 0.8;
}

.member-status.pending {
    background-color: #fef3c7;
    color: #92400e;
}

.member-status.accepted {
    background-color: #dcfce7;
    color: #166534;
}

.member-status.rejected {
    background-color: #fee2e2;
    color: #991b1b;
}

.crown-emoji {
    font-size: 1rem;
}
</style> 