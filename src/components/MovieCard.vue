<template>
  <v-card
    class="ma-4"
    max-width="300"
  >
    <v-img
      :src="basicImgPath + img"
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
      {{ title }}
    </v-card-title>
    <v-card-subtitle>
      {{ releaseDate }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        to watch
      </v-btn>
      <v-spacer />
      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      />
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider />
        <v-card-text>{{ description }}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import thumbnail from '../assets/img/thumbnail.jpg';

export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    releaseDate: { type: String, required: true },
  },
  data: () => ({
    basicImgPath: 'https://image.tmdb.org/t/p/original/',
    show: false,
    thumbnail,
  }),
};
</script>
