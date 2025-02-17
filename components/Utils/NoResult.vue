<template>
  <div
    v-if="loader"
    class="w-full h-[70vh] flex flex-col justify-center gap-2 items-center"
  >
    <img width="70" src="@/assets/img/loading.gif" alt="" />
  </div>
  <div v-else class="w-full h-[70vh] flex flex-col justify-center gap-2 items-center">
    <img src="@/assets/img/noresult.png" alt="" />

    <p class="font-bold text-lg font-sans">No {{ title }} available!</p>
  </div>
</template>

<script>
export default {
  props: ["title", "loader"],
};
</script>

<style></style>
