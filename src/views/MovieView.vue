<template>
  <div v-if="isLoading">Loading...</div>
  <template v-else>
    <v-card
      color="surface-variant"
      class="dark-bg fill-height"
      :image="bgImg"
    >
      <v-container class="fill-height d-flex" fluid>
        <v-row>
          <v-col cols="auto">
            <v-img class="poster" width="400px" height="600px" :src="posterImg" />
          </v-col>
          <v-col>
            <p class="text-h2 mb-2">{{ title }}</p>
            <v-card-subtitle class="text-h6 pa-0">{{ subtitle }}</v-card-subtitle>
            <p class="mt-6 text-body-1">{{ description }}</p>
            <div class="d-flex flex-column ga-2 mt-4">
              <movie-info-line
                v-for="item in additionalInfo"
                :key="item.icon"
                :info="item.info"
                :icon="item.icon" />
            </div>
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
import { baseImgPath } from '@/const';
import MovieInfoLine from '@/components/shared/MovieInfoLine.vue';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { getFormattedTime } from '@/utils/getFormattedTime';

const route = useRoute();
const { getMovie } = useSearchStore();
const { isLoading } = storeToRefs(useSearchStore());
const movie = await getMovie(route.params.id as string);
const title = movie?.data.title;
const subtitle = movie?.data.tagline;
const bgImg = baseImgPath + (movie?.data.backdrop_path ?? '');
const posterImg = baseImgPath + (movie?.data.poster_path ?? '');
const description = movie?.data.overview;
const additionalInfo = [
  {
    icon: 'mdi-calendar-month',
    info: getFormattedDate(movie?.data.release_date ?? ''),
  },
  {
    icon: 'mdi-star',
    info: movie?.data.vote_average.toFixed(1).replace('.0', '') ?? '',
  },
  {
    icon: 'mdi-clock-time-four-outline',
    info: getFormattedTime(movie?.data.runtime ?? 0),
  },
  {
    icon: 'mdi-movie-filter',
    info: movie?.data.genres?.map((genre) => genre.name).join(', ') ?? '',
  },
];
</script>

<style scoped>
.dark-bg ::v-deep img {
    filter: brightness(20%);
}
.poster ::v-deep img {
  filter: none;
}
</style>
