<template>
  <v-layout class="w-full">
    <div class="w-full">
      <HomeHeader class="w-full"></HomeHeader>
      <slot></slot>
      <UtilsFooter></UtilsFooter>s
    </div>

    <v-navigation-drawer
      v-model="drawer"
     
      temporary
    >
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
  }),
};
</script>

<style>
</style>