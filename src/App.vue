<template>
  <VApp>
    <AppSideBar />
    <VMain>
      <router-view />
    </VMain>
    <scroll-to-top />
  </VApp>
</template>

<script setup lang="ts">
import ScrollToTop from '@/components/ScrollToTop.vue';
import AppSideBar from './components/SideBar.vue';
import { useQueueStore } from './stores/queue';
import { useSearchStore } from './stores/search';

const queue = useQueueStore();
const { getMovieList } = useSearchStore();

getMovieList();

queue.$subscribe((_, state) => {
  localStorage.setItem('movie-queue: queue', JSON.stringify(state.movies));
});
</script>
