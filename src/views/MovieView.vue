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
import { watch } from 'vue';

const route = useRoute();
const search = useSearchStore();

search.getMovie(route.params.id as string);

watch(() => search.movie, () => {
  document.title = `Movie Queue - ${search.movie.title}`;
});

</script>
