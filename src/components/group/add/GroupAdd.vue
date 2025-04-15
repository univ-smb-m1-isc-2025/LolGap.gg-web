<template>
    <div class="group-add">
        <input
            v-model="groupName"
            type="text"
            placeholder="Nom du groupe"
            class="group-input"
            @keyup.enter="handleCreate"
        />
        <button class="create-button" @click="handleCreate" :disabled="!groupName.trim()">
            Créer
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGroupStore } from '../../../stores/group/group.store'

const groupName = ref('')
const groupStore = useGroupStore()

const handleCreate = async () => {
    if (!groupName.value.trim()) return
    
    try {
        await groupStore.createGroup(groupName.value)
        groupName.value = ''
    } catch (error) {
        console.error('Erreur lors de la création du groupe:', error)
    }
}
</script>

<style scoped>
.group-add {
    display: flex;
    gap: 8px;
    padding: 16px;
    border-bottom: 1px solid #e5e7eb;
}

.group-input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    font-size: 14px;
}

.group-input:focus {
    outline: none;
    border-color: #3b82f6;
}

.create-button {
    padding: 8px 16px;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s ease;
}

.create-button:hover {
    background-color: #2563eb;
}

.create-button:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
}
</style> 