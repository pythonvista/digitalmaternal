<template>
  <v-layout class="w-full">
    <div class="w-full">
      <HomeHeader :toggle="toggle" class="w-full"></HomeHeader>
      <slot></slot>
      <UtilsFooter></UtilsFooter>
    </div>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <div class="flex py-10 flex-col justify-start items-center gap-10">
          <div @click="$router.push({path: '/'})" class="text-lg font-bold">Home</div>
          <div @click="$router.push({path: '/about'})" class="text-lg font-bold">About Us</div>
          <div @click="$router.push({path: '/blog'})" class="text-lg font-bold">Articles</div>
          <div @click="$router.push({path: '/contact'})" class="text-lg font-bold">Contact Us</div>
        </div>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  methods: {
    toggle() {
      this.drawer = !this.drawer;
    },
  },
  mounted() {
    if (this.$route?.query?.id) {
      this.$router.push({
        path: "/blog/info",
        query: {
          id: this.$route?.query?.id,
        },
      });
    }
  },
};
</script>

<style>
</style>