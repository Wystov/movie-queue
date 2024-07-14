<template>
  <v-pagination
    v-model="currentPage"
    class="mt-10 mb-5"
    :length="length"
    :total-visible="5" />
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';

defineProps<{
  length: number
}>();

const { currentPage } = storeToRefs(useSearchStore());
</script>
