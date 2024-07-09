<template>
  <VApp>
    <AppSideBar />
    <VMain>
      <router-view />
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import AppSideBar from './components/SideBar.vue';
import { useQueueStore } from './stores/queue';
import { useSearchStore } from './stores/search';

const queue = useQueueStore();
const { getMovies } = useSearchStore();

getMovies();

queue.$subscribe((_, state) => {
  localStorage.setItem('movie-queue: queue', JSON.stringify(state.movies));
});
</script>
