<template>
  <v-navigation-drawer
    :expand-on-hover="$vuetify.display.mdAndUp"
    :mobile="!$vuetify.display.mdAndUp"
    rail
    permanent>
    <v-list>
      <v-list-item title="Movie Queue" prepend-icon="mdi-movie">
        <template #title>
          <h1 class="text-h6 font-weight-bold">Movie Queue</h1>
        </template>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list density="compact" nav>
      <v-list-item
        v-for="link in links"
        :key="link.to"
        :to="{ name: link.to }"
        :title="link.text"
        :prepend-icon="link.icon"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const links = [
  { to: 'main', icon: 'mdi-magnify', text: 'Search' },
  { to: 'to-watch', icon: 'mdi-star', text: 'Starred' },
  { to: 'watched', icon: 'mdi-history', text: 'Watched' },
];
</script>
