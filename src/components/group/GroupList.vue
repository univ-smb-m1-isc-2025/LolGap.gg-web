<template>
    <div class="group-list">
        <div v-for="group in groups" :key="group.id" @click="selectGroup(group)">
            <GroupPreview :group="group" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGroupStore } from '../../stores/group/group.store'
import type { Group } from '../../types/group'
import GroupPreview from './preview/GroupPreview.vue'

const groupStore = useGroupStore()
const groups = computed(() => groupStore.groups)

const selectGroup = (group: Group) => {
    groupStore.selectGroup(group)
}
</script>

<style scoped>
.group-list {
    @apply flex flex-col gap-4 p-4 bg-gray-50 rounded-lg shadow-sm;
    min-height: 200px;
}

.group-list > div {
    @apply transition-transform hover:scale-[1.02];
}
</style> 