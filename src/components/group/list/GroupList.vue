<template>
    <div class="group-list">
        <GroupAdd />
        <div class="groups-container">
            <GroupPreview
                v-for="group in groups"
                :key="group.id"
                :group="group"
                @click="handleGroupClick(group)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useGroupStore } from '../../../stores/group/group.store'
import GroupPreview from '../preview/GroupPreview.vue'
import GroupAdd from '../add/GroupAdd.vue'
import type { Group } from '../../../types/group'

const groupStore = useGroupStore()
const groups = computed(() => groupStore.groups)

onMounted(async () => {
    await groupStore.fetchGroups()
})

const handleGroupClick = (group: Group) => {
    groupStore.selectGroup(group)
}
</script>

<style scoped>
.group-list {
    display: flex;
    flex-direction: column;
    width: 40%;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    padding: 1rem;
}

.groups-container {
    flex: 1;
    overflow-y: auto;
}
</style> 