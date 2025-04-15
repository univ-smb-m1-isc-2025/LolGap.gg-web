import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { GroupService } from '../../services/group.service'
import type { Group, GroupMember } from '../../types/group'

export const useGroupStore = defineStore('group', () => {
    const groups = ref<Group[]>([])
    const selectedGroup = ref<Group | null>(null)
    const members = ref<GroupMember[]>([])
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    const groupService = GroupService.getInstance()

    const fetchGroups = async () => {
        isLoading.value = true
        error.value = null
        try {
            groups.value = await groupService.getMyGroups()
            
            for (const group of groups.value) {
                try {
                    const groupMembers = await groupService.getGroupMembers(group.id)
                    group.members = groupMembers
                } catch (err) {
                    console.error(`Erreur lors du chargement des membres du groupe ${group.id}:`, err)
                }
            }

            if (groups.value.length > 0 && !selectedGroup.value) {
                selectGroup(groups.value[0])
            }
        } catch (err) {
            error.value = 'Erreur lors du chargement des groupes'
            console.error(err)
        } finally {
            isLoading.value = false
        }
    }

    const createGroup = async (name: string) => {
        isLoading.value = true
        error.value = null
        try {
            const newGroup = await groupService.createGroup(name)
            const groupMembers = await groupService.getGroupMembers(newGroup.id)
            newGroup.members = groupMembers
            groups.value.push(newGroup)
            return newGroup
        } catch (err) {
            error.value = 'Erreur lors de la création du groupe'
            console.error(err)
            throw err
        } finally {
            isLoading.value = false
        }
    }

    const renameGroup = async (groupId: number, newName: string) => {
        isLoading.value = true
        error.value = null
        try {
            const updatedGroup = await groupService.renameGroup(groupId, newName)
            const index = groups.value.findIndex(g => g.id === groupId)
            if (index !== -1) {
                groups.value[index] = updatedGroup
            }
            if (selectedGroup.value?.id === groupId) {
                selectedGroup.value = updatedGroup
            }
            return updatedGroup
        } catch (err) {
            error.value = 'Erreur lors du renommage du groupe'
            console.error(err)
            throw err
        } finally {
            isLoading.value = false
        }
    }

    const deleteGroup = async (groupId: number) => {
        isLoading.value = true
        error.value = null
        try {
            await groupService.deleteGroup(groupId)
            groups.value = groups.value.filter(g => g.id !== groupId)
            if (selectedGroup.value?.id === groupId) {
                selectedGroup.value = groups.value[0] || null
            }
        } catch (err) {
            error.value = 'Erreur lors de la suppression du groupe'
            console.error(err)
            throw err
        } finally {
            isLoading.value = false
        }
    }

    const leaveGroup = async (groupId: number) => {
        isLoading.value = true
        error.value = null
        try {
            await groupService.leaveGroup(groupId)
            groups.value = groups.value.filter(g => g.id !== groupId)
            if (selectedGroup.value?.id === groupId) {
                selectedGroup.value = groups.value[0] || null
            }
        } catch (err) {
            error.value = 'Erreur lors de la sortie du groupe'
            console.error(err)
            throw err
        } finally {
            isLoading.value = false
        }
    }

    const selectGroup = async (group: Group) => {
        isLoading.value = true
        error.value = null
        try {
            selectedGroup.value = group
            members.value = await groupService.getGroupMembers(group.id)
        } catch (err) {
            error.value = 'Erreur lors du chargement des membres'
            console.error(err)
        } finally {
            isLoading.value = false
        }
    }

    return {
        groups,
        selectedGroup,
        members,
        isLoading,
        error,
        fetchGroups,
        createGroup,
        renameGroup,
        deleteGroup,
        leaveGroup,
        selectGroup
    }
}) 