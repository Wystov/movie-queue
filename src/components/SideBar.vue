<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-icon="mdi-account"
        title="User"
        subtitle="profile" />
    </v-list>
    <v-divider />
    <v-list density="compact" nav>
      <v-list-item
        v-for="link in links"
        :key="link.to"
        :to="{ name: link.to }"
        :prepend-icon="link.icon"
        :title="link.text" />
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
