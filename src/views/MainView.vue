<template>
  <movie-list :movies="searchStore.results" :textContent="textContent" :total="searchStore.total">
    <template v-slot:search>
      <v-text-field
        v-model="searchInput"
        ref="input"
        @keyup.enter="searchMovies"
        class="w-50"
        clearable
        label="Let's find a movie"
        prepend-icon="mdi-magnify"
        variant="underlined"
      />
    </template>
    <template v-slot:subheader>results found for "{{ searchStore.requestString }}"</template>
  </movie-list>
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import { useSearchStore } from '../stores/search';
import MovieList from '../components/MovieList.vue';

export default {
  components: {
    MovieList,
  },
  data: () => ({
    searchInput: '',
    isSearched: false,
    textContent: {
      title: 'Main',
      error: 'No movies found',
    },
  }),
  computed: {
    ...mapStores(useSearchStore),
  },
  methods: {
    searchMovies() {
      if (this.searchInput.length > 0) {
        this.searchStore.searchMovies(this.searchInput);
        const input = this.$refs.input as HTMLInputElement;
        input.blur();
        this.searchInput = '';
      }
    },
  },
};
</script>
