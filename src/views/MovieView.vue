<template>
  <app-spinner v-if="search.isLoading" />
  <template v-else>
    <movie-extended />
  </template>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useSearchStore } from '@/stores/search';
import MovieExtended from '@/components/MovieExtended.vue';
import AppSpinner from '@/components/shared/AppSpinner.vue';

const route = useRoute();
const search = useSearchStore();

search.getMovie(route.params.id as string);

</script>
