<template>
    <div class="group-preview" @click="handleClick">
        <div class="group-info">
            <DeleteGroupButton v-if="isOwner" :groupId="group.id" @click.stop />
            
            <span class="group-name">{{ group.name }}</span>
        </div>
        <div class="group-actions">
            <span class="member-count">{{ memberCount }} membres</span>
            <span v-if="isOwner" class="crown-emoji">👑</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Group } from '../../../types/group'
import { useGroupStore } from '../../../stores/group/group.store'
import { useAuthStore } from '../../../stores/auth/auth.store'
import DeleteGroupButton from '../delete/DeleteGroupButton.vue'

const props = defineProps<{
    group: Group
}>()

const emit = defineEmits<{
    (e: 'click'): void
}>()

const groupStore = useGroupStore()
const authStore = useAuthStore()

const isOwner = computed(() => {
    return Number(props.group.owner.id) === Number(authStore.account?.id)
})

const memberCount = computed(() => {
    return props.group.members?.length || 0
})

const handleClick = () => {
    emit('click')
}
</script>

<style scoped>
.group-preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    margin: 4px 8px;
    background-color: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: all 0.2s ease;
}

.group-preview:hover {
    background-color: #f9fafb;
}

.group-info {
    display: flex;
    align-items: center;
    gap: 8px;
}

.group-name {
    font-weight: 500;
    color: #1f2937;
}

.owner-icon {
    color: #fbbf24;
    font-size: 14px;
}

.group-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.member-count {
    color: #6b7280;
    font-size: 14px;
}
</style> 