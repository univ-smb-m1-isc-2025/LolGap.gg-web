<template>
    <div class="popup-overlay" @click="closePopup">
        <div class="update-member-status" @click.stop>
            <div class="popup-header">
                <h3>Modifier le statut de {{ member.account.username }}</h3>
                <button class="close-button" @click="closePopup">×</button>
            </div>
            <div class="status-input">
                <input 
                    type="text" 
                    v-model="newStatus" 
                    placeholder="Entrez le nouveau statut"
                    @keyup.enter="updateStatus"
                />
                <button class="save-button" @click="updateStatus">Enregistrer</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { GroupMember } from '../../../types/group'
import { useGroupStore } from '../../../stores/group/group.store'
import { MemberService } from '../../../services/member.service'

const props = defineProps<{
    member: GroupMember
}>()

const emit = defineEmits<{
    (e: 'close'): void
    (e: 'updated', member: GroupMember): void
}>()

const groupStore = useGroupStore()
const memberService = MemberService.getInstance()
const newStatus = ref(props.member.status)

const closePopup = () => {
    emit('close')
}

const updateStatus = async () => {
    try {
        await memberService.updateMemberStatus(groupStore.selectedGroup!.id, props.member.account.username, newStatus.value)
        await groupStore.selectGroup(groupStore.selectedGroup!)
        const updatedMember = { ...props.member, status: newStatus.value }
        emit('updated', updatedMember)
        alert('Statut mis à jour avec succès')
        closePopup()
    } catch (error) {
        console.error('Erreur lors de la mise à jour du statut:', error)
        alert('Erreur lors de la mise à jour du statut')
    }
}
</script>

<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.update-member-status {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 400px;
    max-width: 90%;
}

.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #e5e7eb;
}

.popup-header h3 {
    margin: 0;
    color: #1f2937;
    font-size: 16px;
    font-weight: 600;
}

.close-button {
    background: none;
    border: none;
    font-size: 24px;
    color: #6b7280;
    cursor: pointer;
    padding: 0;
    line-height: 1;
}

.close-button:hover {
    color: #1f2937;
}

.status-input {
    padding: 20px;
    display: flex;
    gap: 8px;
}

.status-input input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 14px;
}

.save-button {
    padding: 8px 16px;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.save-button:hover {
    background-color: #2563eb;
}
</style> 