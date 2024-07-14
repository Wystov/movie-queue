<template>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <v-card
      class="ma-4 d-flex flex-column"
      width="100%"
      height="100%"
      v-bind="hoverProps"
    >
      <movie-poster
        :path="movie.poster_path"
        :is-hovering="isHovering"
        in-card
        @click-details="handleClick" />

      <v-card-title style="white-space: normal; height: 4em;">
        {{ movie.title }}
      </v-card-title>
      <v-card-subtitle class="d-flex justify-space-between">
        <MovieInfoLine icon="mdi-star" :info="rating" />
        <MovieInfoLine icon="mdi-calendar-month" :info="date" />
      </v-card-subtitle>
      <movie-actions :movie="movie" />
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Movie } from '@/types';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { useRouter } from 'vue-router';
import MovieInfoLine from '@/components/shared/MovieInfoLine.vue';
import MoviePoster from '@/components/shared/MoviePoster.vue';
import MovieActions from '@/components/shared/MovieActions.vue';

const props = defineProps<{
  movie: Movie;
}>();

const router = useRouter();

const rating = computed(() => props.movie.vote_average?.toFixed(1).replace('.0', ''));

const date = computed(() => getFormattedDate(props.movie.release_date));

const handleClick = () => router.push({ name: 'movie', params: { id: props.movie.id } });

</script>
