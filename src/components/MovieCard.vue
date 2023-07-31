<template>
  <v-card
    class="ma-4"
    max-width="300"
  >
    <v-img
      :src="basicImgPath + movie.poster_path"
      width="300px"
      height="400px"
      cover>
      <template
        v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          />
        </div>
      </template>
      <template v-slot:error>
        <v-img
          width="300px"
          height="400px"
          cover
          :src="thumbnail"
        />
      </template>
    </v-img>
    <v-card-title>
      {{ movie.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ movie.release_date }}
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
          v-if="movie.isWatched"
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
import { useQueueStore } from '../stores/queue';
import thumbnail from '../assets/img/thumbnail.jpg';
import type { Movie } from '@/types';

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
};
</script>
