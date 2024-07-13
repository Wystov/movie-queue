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
    <v-expand-transition>
      <div
        v-if="isHovering"
        class="d-flex transition-fast-in-fast-out bg-grey-darken-4 v-card--reveal text-h2"
        style="height: 100%;"
      >
        <v-btn @click="$emit('click-details')">Details</v-btn>
      </div>
    </v-expand-transition>
  </v-img>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import thumbnail from '@/assets/img/thumbnail.jpg';
import { baseImgPath } from '@/const';

defineEmits(['click-details']);

const props = defineProps<{
  path?: string | null;
  isHovering: boolean | null;
}>();

const imgPath = computed(
  () => (props.path ? baseImgPath + props.path : thumbnail),
);
</script>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
  }
</style>
