<template>
  <div v-if="isLoading">Loading...</div>
  <template v-else>
    <v-card
      color="surface-variant"
      class="dark-bg fill-height"
      :image="movie.backdrop_path ?? ''"
    >
      <v-container class="fill-height d-flex" fluid>
        <v-row>
          <v-col cols="auto">
            <v-img class="poster" width="400px" height="600px" :src="movie.poster_path" />
          </v-col>
          <v-col>
            <p class="text-h2 mb-2">{{ movie.title }}</p>
            <v-card-subtitle class="text-h6 pa-0">{{ movie.tagline }}</v-card-subtitle>
            <p class="mt-6 text-body-1">{{ movie.overview }}</p>
            <div class="d-flex flex-column ga-2 my-4">
              <movie-info-line
                v-for="item in additionalInfo"
                :key="item.icon"
                :info="item.info"
                :icon="item.icon" />
            </div>
            <movie-card-actions :movie="movie" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';
import MovieInfoLine from '@/components/shared/MovieInfoLine.vue';
import MovieCardActions from '@/components/MovieCard/MovieCardActions.vue';
import { computed } from 'vue';
import { getFormattedTime } from '@/utils/getFormattedTime';

const route = useRoute();
const { getMovie } = useSearchStore();
const { isLoading, movie } = storeToRefs(useSearchStore());

getMovie(route.params.id as string);

const additionalInfo = computed(() => [
  {
    icon: 'mdi-calendar-month',
    info: movie.value.release_date,
  },
  {
    icon: 'mdi-star',
    info: movie.value.vote_average?.toString(),
  },
  {
    icon: 'mdi-clock-time-four-outline',
    info: getFormattedTime(movie.value.runtime ?? 0),
  },
  {
    icon: 'mdi-movie-filter',
    info: movie.value.genres?.map((genre) => genre.name).join(', ') ?? '',
  },
]);
</script>

<style scoped>
.dark-bg ::v-deep img {
    filter: brightness(20%);
}
.poster ::v-deep img {
  filter: none;
}
</style>
