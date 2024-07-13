<template>
  <div class="d-flex align-center">
    <v-icon :icon="icon" class="mr-1" />
    {{ info }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  info: string,
  icon: string
}>();
</script>
