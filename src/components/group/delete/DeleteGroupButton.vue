<template>
    <button class="delete-button" @click="handleDelete" title="Supprimer le groupe">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
    </button>
</template>

<script setup lang="ts">
import { useGroupStore } from '../../../stores/group/group.store'
import { useToast } from 'vue-toastification'

const props = defineProps<{
    groupId: number
}>()

const groupStore = useGroupStore()
const toast = useToast()

const handleDelete = async () => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce groupe ?')) {
        try {
            await groupStore.deleteGroup(props.groupId)
            toast.success('Groupe supprimé avec succès')
        } catch (error) {
            console.error('Erreur lors de la suppression du groupe:', error)
            toast.error('Erreur lors de la suppression du groupe')
        }
    }
}
</script>

<style scoped>
.delete-button {
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    color: #6b7280;
    transition: all 0.2s ease;
}

.delete-button:hover {
    color: #ef4444;
}

.delete-button .icon {
    width: 16px;
    height: 16px;
}
</style> 