<template>
  <v-btn
    class="position-fixed bottom-0 right-0 mb-2 mr-2"
    icon="mdi-chevron-up"
    @click="scrollToTop" />
</template>

<script setup lang="ts">

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
