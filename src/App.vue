<template>
  <VApp>
    <AppSideBar />
    <VMain>
      <router-view />
    </VMain>
  </VApp>
</template>

<script lang="ts">
import AppSideBar from './components/SideBar.vue';

export default {
  components: {
    AppSideBar,
  },
};
</script>
