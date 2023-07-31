<template>
  <v-card
    class="ma-4"
    max-width="300"
  >
    <v-img
      v-if="movie.poster_path"
      :src="basicImgPath + movie.poster_path"
      width="300px"
      height="400px"
      cover>
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          />
        </div>
      </template>
    </v-img>
    <v-img
      v-else
      width="300px"
      height="400px"
      cover
      :src="thumbnail"
    />
    <v-card-title>
      {{ movie.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ movie.release_date.length ? movie.release_date : 'no date info' }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        v-if="!queueStore.isInList(movie.id)"
        @click="queueStore.addMovie(movie)"
        color="success"
        variant="text"
      >
        + queue
      </v-btn>
      <template v-else>
        <v-btn
          @click="queueStore.removeMovie(movie.id)"
          color="red"
          variant="text"
        >
          - queue
        </v-btn>
        <v-btn
          v-if="isWatched(movie)"
          @click="queueStore.toggleWatched(movie.id)"
          color="red"
          variant="text"
        >
          watched
        </v-btn>
        <v-btn
          v-else
          @click="queueStore.toggleWatched(movie.id)"
          color="success"
          variant="text"
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
  computed: {
    ...mapStores(useQueueStore),
  },
  data: () => ({
    basicImgPath: 'https://image.tmdb.org/t/p/original/',
    show: false,
    thumbnail,
  }),
  methods: {
    isWatched(movie: Movie): boolean {
      return movie.isWatched
      ?? Boolean(this.queueStore.watched.find((item) => item.id === movie.id));
    },
  },
};
</script>
