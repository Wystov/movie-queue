<template>
  <v-navigation-drawer
    :expand-on-hover="$vuetify.display.mdAndUp"
    :mobile="!$vuetify.display.mdAndUp"
    rail
    permanent>
    <v-list>
      <v-list-item title="Movie Queue">
        <template v-slot:prepend>
          <v-icon class="mr-3">mdi-movie</v-icon>
        </template>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list density="compact" nav>
      <v-list-item
        v-for="link in links"
        :key="link.to"
        :to="{ name: link.to }"
        :title="link.text">
        <template v-slot:prepend>
          <v-icon class="mr-3">{{ link.icon }}</v-icon>
        </template>
      </v-list-item>
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
