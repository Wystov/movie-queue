<template>
  <v-pagination
    v-model="currentPage"
    class="mt-10 mb-5"
    :length="length"
    :total-visible="5" />
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  currentPage: number,
  length: number
}>();

const emit = defineEmits(['update:current-page']);

const currentPage = computed({
  get() {
    return props.currentPage;
  },
  set(value: number) {
    emit('update:current-page', value);
  },
});
</script>
