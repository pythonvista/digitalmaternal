<template>
  <section class="w-full h-full bg-accent2 px-5">
    <div class="flex flex-col w-full items-center justify-center py-5">
      <div class="flex w-full items-center justify-center">
        <div class="border-b border-black w-[10%]"></div>
        <span
          class="md:text-2xl xs:text-lg md:font-semibold xs:font-medium tracking-wider py-8 px-5"
          >Our Projects</span
        >
        <div class="border-b border-black w-[10%]"></div>
      </div>
      <span
        class="text-5xl tracking-widest md:font-semibold xs:font-medium text-orange-400"
        >Taaf Projects</span
      >
    </div>

    <div class="content-wrapper relative">
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
        <img class="rounded-lg w-full" src="@/assets/img/Pictures.png" alt="" />
      </div>

      <div
        class="md:absolute xs:static xs:pt-5  inset-0 flex flex-col items-center justify-end pb-10 z-10  "
      >
        <p class="text-2xl md:text-white xs:text-black text-center">
          Digital Solutions to Check Maternal Outcomes
        </p>

        <div
          class="overlay-button text-orange-500 border-2 border-orange-500 xs:w-full md:w-36 h-12 rounded-3xl flex items-center justify-center mt-3 hover:bg-white duration-300 hover:border-white"
        >
          <a @click="$router.push({path: '/about'})"  class="flex gap-3 px-3 items-center">
            Read more
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9563 17.2748C13.7563 17.0748 13.6604 16.8331 13.6687 16.5498C13.6771 16.2665 13.7812 16.0248 13.9812 15.8248L16.8063 12.9998H5.65625C5.37292 12.9998 5.13542 12.904 4.94375 12.7123C4.75208 12.5206 4.65625 12.2831 4.65625 11.9998C4.65625 11.7165 4.75208 11.479 4.94375 11.2873C5.13542 11.0956 5.37292 10.9998 5.65625 10.9998H16.8063L13.9563 8.1498C13.7563 7.9498 13.6562 7.7123 13.6562 7.4373C13.6562 7.1623 13.7563 6.9248 13.9563 6.7248C14.1562 6.5248 14.3938 6.4248 14.6687 6.4248C14.9437 6.4248 15.1813 6.5248 15.3813 6.7248L19.9563 11.2998C20.0563 11.3998 20.1271 11.5081 20.1687 11.6248C20.2104 11.7415 20.2312 11.8665 20.2312 11.9998C20.2312 12.1331 20.2104 12.2581 20.1687 12.3748C20.1271 12.4915 20.0563 12.5998 19.9563 12.6998L15.3562 17.2998C15.1729 17.4831 14.9437 17.5748 14.6687 17.5748C14.3938 17.5748 14.1562 17.4748 13.9563 17.2748Z"
                fill="#f97316"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>


    <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full w-full gap-6 pb-8 mt-12 overflow-x-auto sm:mt-16 snap-x relative">
        <div class="relative snap-start scroll-ml-6 shrink-0 md:h-[450px] xs:h-auto  last:pr-6 rounded-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <img class=" h-full bg-cover w-full rounded-lg" src="https://digitalmaternal.vercel.app/_nuxt/child.e703841b.png" alt="" />
            <span class="absolute bottom-14 flex items-center justify-end flex-col h-full  w-full text-white">
              <p class="text-2xl text-center pb-7">CHILD RIGHTS <br> ADVOCACY</p>
              <button class="text-orange-500 uppercase relative after:absolute after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Read More</button>
            </span>
            
        </div>
        <div class="relative snap-start scroll-ml-6 shrink-0 md:h-[450px] xs:h-auto  last:pr-6 rounded-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <img class=" h-full bg-cover w-full rounded-lg" src="https://digitalmaternal.vercel.app/_nuxt/hygiene.8f1f5d03.png" alt="" />
            <span class="absolute bottom-14 flex items-center justify-end flex-col h-full  w-full text-white">
              <p class="text-2xl text-center pb-7">HER Hygiene & HER (HHH) Campaign</p>
              <button class="text-orange-500 uppercase relative after:absolute after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Read More</button>
            </span>
            
        </div>
        <div class="relative snap-start scroll-ml-6 shrink-0 md:h-[450px] xs:h-auto  last:pr-6 rounded-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <img class=" h-full bg-cover w-full rounded-lg" src="https://digitalmaternal.vercel.app/_nuxt/projectimg.045066a8.png" alt="" />
            <span class="absolute bottom-14 flex items-center justify-end flex-col h-full  w-full text-white">
              <p class="text-2xl text-center pb-7">Maisha Save a
Mother’s Life</p>
              <button class="text-orange-500 uppercase relative after:absolute after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Read More</button>
            </span>
            
        </div>
        <div class="relative snap-start scroll-ml-6 shrink-0 md:h-[450px] xs:h-auto  last:pr-6 rounded-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <img class=" h-full bg-cover w-full rounded-lg" src="https://i.imgur.com/kIuoJHg.jpeg" alt="" />
            <span class="absolute bottom-14 flex items-center justify-end flex-col h-full  w-full text-white">
              <p class="text-xl text-center pb-7">Addressing Gaps in Policy & Access to Reproductive Healthcare for Women in Conflict</p>
              <button class="text-orange-500 uppercase relative after:absolute after:w-0 after:h-[2px] after:bg-orange-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Read More</button>
            </span>
            
        </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
