<template>
  <VApp>
    <AppSideBar />
    <VMain v-scroll="onScroll">
      <router-view />
    </VMain>
    <scroll-to-top :show="showScrollToTop" />
  </VApp>
</template>

<script setup lang="ts">
import ScrollToTop from '@/components/ScrollToTop.vue';
import { ref } from 'vue';
import AppSideBar from './components/SideBar.vue';
import { useQueueStore } from './stores/queue';
import { useSearchStore } from './stores/search';

const queue = useQueueStore();
const { getMovieList } = useSearchStore();

getMovieList();

const showScrollToTop = ref(false);

const onScroll = () => {
  showScrollToTop.value = window.scrollY > 500;
};

queue.$subscribe((_, state) => {
  localStorage.setItem('movie-queue: queue', JSON.stringify(state.movies));
});
</script>
