<template>
  <search-bar />
  <movie-list
    :movies="searchStore.results"
    :textContent="textContent"
    :total="searchStore.total">
    <template v-slot:subheader>results found for "{{ searchStore.requestString }}"</template>
  </movie-list>
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import { useSearchStore } from '../stores/search';
import MovieList from '../components/MovieList.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
  components: {
    MovieList,
    SearchBar,
  },
  data: () => ({
    textContent: {
      title: 'Main',
      error: 'No movies found',
    },
  }),
  computed: {
    ...mapStores(useSearchStore),
  },
};
</script>
