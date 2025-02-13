<template>
  <div class="min-h-screen">
    <HomeHeader :openDialog="openDialog"></HomeHeader>
    <HomeHero :openDialog="openDialog"></HomeHero>
    <HomeAbout></HomeAbout>
    <HomeStacks></HomeStacks>

    <HomeFeatures :openDialog="openDialog"></HomeFeatures>
    <HomeTeam></HomeTeam>

    <HomeWhyjoin></HomeWhyjoin>
    <HomeJoinnow :openDialog="openDialog"></HomeJoinnow>
    <HomeSponsors></HomeSponsors>
    <q-dialog
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
      v-model="dialog"
    >
      <div class="p-0 bg-white">
        <q-bar class="bg-white py-5 shadow-sm border-b-2">
          <img width="150" src="@/assets/img/logo.png" alt="" />
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <HomeWaitList :clus="cluster"></HomeWaitList>
      </div>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // List of endpoints
      dialog: false,
      cluster: "",
    };
  },
  methods: {
    navigateTo(path) {
      this.$router.push({ path });
    },
    openDialog(cluster = null) {
      try {
          this.cluster = cluster;
      this.dialog = !this.dialog;
      } catch (err) {
        console.log(err);
      }
    
    },
  },
};
</script>

<style scoped>
/* Add some custom styles if needed */
</style>

<style>
.q-stepper__header {
  display: none !important;
}

.q-stepper--horizontal .q-stepper__step-inner {
  padding: 0 !important;
}
</style>
