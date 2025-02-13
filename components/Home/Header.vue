<template>
  <header class="fixed border-b-2 shadow bg-yellow-50 border-orange-100 inset-x-0 top-0 z-10 w-full">
    <div class="px-8 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <div class="flex-shrink-0">
          <a href="#" title="" class="flex">
            <img
              class="w-auto  p-1 h-10"
              src="https://i.imgur.com/i8xisNO.png"
              alt=""
            />
          </a>
        </div>

       

        <div
          class=" ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10"
        >
          <!-- <a
            href="#"
            title=""
            class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            Features
          </a>

          <a
            href="#"
            title=""
            class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            Solutions
          </a>

          <a
            href="#"
            title=""
            class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            Resources
          </a>

          <a
            href="#"
            title=""
            class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            Pricing
          </a> -->

          <a
            @click="openDialog(null)"
            title=""
            class="inline-flex items-center justify-center px-5 py-2.5 cursor-pointer text-base font-semibold transition-all duration-200 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600"
            role="button"
          >
            Join Cohort
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
  
  <script>
export default {
  props: ["openDialog"],
  data: () => ({
    nav: false,
  }),
};
</script>
  
  <style scoped>
.menuu {
  transition: 0.8s !important;
}
</style>
  