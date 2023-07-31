<template>
  <VApp>
    <AppSideBar />
    <VMain>
      <router-view />
    </VMain>
  </VApp>
</template>

<script lang="ts">
import { mapStores } from 'pinia';
import AppSideBar from './components/SideBar.vue';
import { useQueueStore } from './stores/queue';

export default {
  components: {
    AppSideBar,
  },
  computed: {
    ...mapStores(useQueueStore),
  },
  mounted() {
    this.queueStore.$subscribe((_, state) => {
      localStorage.setItem('movie-queue: queue', JSON.stringify(state.movies));
    });
  },
};
</script>
