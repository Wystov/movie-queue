<template>
  <v-img
    :src="imgPath"
    height="70%"
    cover
  >
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
        :src="thumbnail"
        height="80%"
        aspect-ratio="3/4"
        cover
      />
    </template>
  </v-img>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import thumbnail from '@/assets/img/thumbnail.jpg';
import { baseImgPath } from '@/const';

const props = defineProps<{
  path?: string | null;
}>();

const imgPath = computed(
  () => (props.path ? baseImgPath + props.path : thumbnail),
);
</script>
