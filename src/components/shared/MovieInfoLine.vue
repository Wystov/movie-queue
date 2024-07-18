<template>
  <div v-if="info" class="d-flex align-center">
    <v-icon :icon="icon" class="mr-2" />
    {{ info }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  info?: string,
  icon: string
}>();
</script>
