<template>
  <Transition>
    <v-btn
      v-show="show"
      class="position-fixed bottom-0 right-0 mb-2 mr-2"
      icon="mdi-chevron-up"
      @click="scrollToTop" />
  </Transition>
</template>

<script setup lang="ts">
defineProps < {
  show: boolean,
}>();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
