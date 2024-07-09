<template>
  <v-card
    class="ma-4"
    width="100%"
  >
    <v-img
      :src="path"
      aspect-ratio="3/4"
      cover>
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          />
        </div>
      </template>
      <template #error>
        <v-img
          height="76%"
          aspect-ratio="3/4"
          cover
          :src="thumbnail"
        />
      </template>
    </v-img>
    <v-card-title>
      {{ movie.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ movie.release_date.length ? movie.release_date : 'no date info' }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        v-if="!queueStore.isInList(movie.id)"
        color="success"
        variant="text"
        @click="queueStore.addMovie(movie)"
      >
        + queue
      </v-btn>
      <template v-else>
        <v-btn
          color="red"
          variant="text"
          @click="queueStore.removeMovie(movie.id)"
        >
          - queue
        </v-btn>
        <v-btn
          v-if="isWatched(movie)"
          color="red"
          variant="text"
          @click="queueStore.toggleWatched(movie.id)"
        >
          watched
        </v-btn>
        <v-btn
          v-else
          color="success"
          variant="text"
          @click="queueStore.toggleWatched(movie.id)"
        >
          not watched
        </v-btn>
      </template>
      <v-spacer />
      <v-btn
        v-if="movie.overview"
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      />
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider />
        <v-card-text>{{ movie.overview }}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { mapStores } from 'pinia';
import type { Movie } from '@/types';
import { useQueueStore } from '../stores/queue';
import thumbnail from '../assets/img/thumbnail.jpg';

export default {
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
  data: () => ({
    basicImgPath: 'https://image.tmdb.org/t/p/original/',
    show: false,
    thumbnail,
  }),
  computed: {
    ...mapStores(useQueueStore),
    path() {
      return this.movie.poster_path !== null
        ? this.basicImgPath + this.movie.poster_path : thumbnail;
    },
  },
  methods: {
    isWatched(movie: Movie): boolean {
      return movie.isWatched
      ?? Boolean(this.queueStore.watched.find((item) => item.id === movie.id));
    },
  },
};
</script>
