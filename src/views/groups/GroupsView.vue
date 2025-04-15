<template>
    <div class="groups-view">
        <div class="groups-container">
            <GroupList />
            <GroupDetails 
                v-if="selectedGroup"
                :group="selectedGroup"
                @rename="handleRename"
                @delete="handleDelete"
            />
            <div v-else class="no-group-selected">
                <p>Sélectionnez un groupe pour voir ses détails</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import GroupList from '../../components/group/list/GroupList.vue'
import GroupDetails from '../../components/group/details/GroupDetails.vue'
import { useGroupStore } from '../../stores/group/group.store'

const groupStore = useGroupStore()
const selectedGroup = computed(() => groupStore.selectedGroup)

const handleRename = () => {
    // TODO: Implement rename functionality
}

const handleDelete = () => {
    // TODO: Implement delete functionality
}
</script>

<style scoped>
.groups-view {
    display: flex;
    height: 100%;
    padding: 2rem;
}

.groups-container {
    display: flex;
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.no-group-selected {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    font-size: 18px;
}
</style> 