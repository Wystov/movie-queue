<template>
  <div class="d-flex flex-column justify-center align-center">
    <h1>main</h1>
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
    <div v-if="!searchStore.total">No results</div>
    <div v-else>
      <h1 class="text-center">{{ searchStore.total }} results found for "{{ searchStore.requestString }}"</h1>
      <div class="d-flex flex-wrap justify-center">
        <movie-card
          v-for="movie in searchStore.results"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import { useSearchStore } from '../stores/search';
import MovieCard from '../components/MovieCard.vue';

export default {
  components: {
    MovieCard,
  },
  data: () => ({
    searchInput: '',
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
