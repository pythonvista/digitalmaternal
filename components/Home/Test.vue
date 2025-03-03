<template>
  <section
    class="w-full overflow-hidden border-t-2 border-b-2 border-solid grid grid-cols-5"
  >
    <div class="xs:col-span-5 md:col-span-3 bg-orange-200 h-full w-full">
      <img src="@/assets/img/Pictures2G.png" alt="" />
    </div>

    <div
      class="xs:col-span-5 md:col-span-2 flex justify-center items-center h-full w-full"
    >
      <div
        class="xs:w-full overlay-text bg-[#7123B3E8] py-10 xl:p-16 xs:h-full md:h-auto md:w-[800px] xs:p-3 md:-ml-[300px]"
      >
        <div class="overlay-header xl:text-white xs:text-white">
          <p class="text-2xl pb-3">About us</p>
          <h2 class="xs:text-3xl md:text-5xl">Who we are</h2>
        </div>

        <div
          class="overlay-content xl:text-white xl:text-base xs:text-white pt-3 xl:w-full xs:w-full"
        >
          <ul class="pt-2">
            <li>1. Get stakeholders buy in.</li>
            <li>2. Identify and map location to pilot.</li>
            <li>3. Identify key performance indicator to organizations impact.</li>
            <li>4. Establish support group and continues M&E practices.</li>
          </ul>
        </div>

        <div
          class="overlay-button text-white border-2 border-white xs:w-full md:w-36 h-12 rounded-3xl flex items-center justify-center mt-7 hover:bg-accent duration-300 hover:border-accent"
        >
          <a @click="$router.push({path: '/about'})"  class="flex gap-3 px-3 items-center">
            Read more
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9563 17.2748C13.7563 17.0748 13.6604 16.8331 13.6687 16.5498C13.6771 16.2665 13.7812 16.0248 13.9812 15.8248L16.8063 12.9998H5.65625C5.37292 12.9998 5.13542 12.904 4.94375 12.7123C4.75208 12.5206 4.65625 12.2831 4.65625 11.9998C4.65625 11.7165 4.75208 11.479 4.94375 11.2873C5.13542 11.0956 5.37292 10.9998 5.65625 10.9998H16.8063L13.9563 8.1498C13.7563 7.9498 13.6562 7.7123 13.6562 7.4373C13.6562 7.1623 13.7563 6.9248 13.9563 6.7248C14.1562 6.5248 14.3938 6.4248 14.6687 6.4248C14.9437 6.4248 15.1813 6.5248 15.3813 6.7248L19.9563 11.2998C20.0563 11.3998 20.1271 11.5081 20.1687 11.6248C20.2104 11.7415 20.2312 11.8665 20.2312 11.9998C20.2312 12.1331 20.2104 12.2581 20.1687 12.3748C20.1271 12.4915 20.0563 12.5998 19.9563 12.6998L15.3562 17.2998C15.1729 17.4831 14.9437 17.5748 14.6687 17.5748C14.3938 17.5748 14.1562 17.4748 13.9563 17.2748Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [],
};
</script>

<style></style>
