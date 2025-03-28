<script setup>
import queueService from '@/services/queueService';

defineProps({
  queueType: {
    type: String,
    required: true
  }
});
</script>

<template>
  <span class="badge bg-secondary">
    {{ queueService.getDisplayName(queueType) }}
  </span>
</template> 