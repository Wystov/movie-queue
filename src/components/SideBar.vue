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
      <v-list-item :to="{ name: 'main' }" prepend-icon="mdi-magnify" title="Search" value="search" />
      <v-list-item :to="{ name: 'to-watch' }" prepend-icon="mdi-star" title="Starred" value="to-watch" />
      <v-list-item :to="{ name: 'watched' }" prepend-icon="mdi-history" title="Watched" value="watched" />
    </v-list>
  </v-navigation-drawer>
</template>
