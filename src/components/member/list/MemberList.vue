<template>
    <div class="member-list">
        <h3 class="member-list-title">Membres</h3>
        <div class="members-container">
            <MemberPreview
                v-for="member in members"
                :key="member.id"
                :member="member"
                @member-click="$emit('member-click', member)"
                @status-click="$emit('status-click', member)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { GroupMember } from '../../../types/group'
import MemberPreview from '../preview/MemberPreview.vue'

const props = defineProps<{
    members: GroupMember[]
}>()

const emit = defineEmits<{
    (e: 'member-click', member: GroupMember): void
    (e: 'status-click', member: GroupMember): void
}>()
</script>

<style scoped>
.member-list {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
}

.member-list-title {
    padding: 16px;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
    border-bottom: 1px solid #e5e7eb;
}

.members-container {
    max-height: 400px;
    overflow-y: auto;
}
</style> 