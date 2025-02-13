<template>
  <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left" src="https://i.imgur.com/3D5v2c9.jpeg" alt="" />
    </div>

    <div class="absolute inset-0 xs:hidden bg-gradient-to-r md:block from-orange-500 to-transparent"></div>

    <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

    <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="xs:text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
       
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Pre Enroll For The Cohort</h2>
            <p class="mt-4 text-base text-gray-200">Join the waitlist for exclusive access to training, opportunities, and tools to help you succeed both academically and personally..</p>

            <form action="#" method="POST" class="mt-8 lg:mt-12">
                <div class="flex flex-col items-center  sm:flex-row xs:justify-center md:justify-start">
                    

                    <button type="button"   @click="openDialog(null)" class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md sm:mt-0  hover:bg-orange-500 focus:bg-orange-500">
                        Join Now
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>

</template>

<script>
export default {
     props: ['openDialog'],

}
</script>

<style>

</style>