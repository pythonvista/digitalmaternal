<template>
  <footer class="py-10 border-t-2  bg-black">
    <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div class="grid items-center grid-cols-4 gap-8 text-center lg:grid-cols-5">
            <div class="col-span-4  lg:col-span-1 lg:order-3">
                <img class="w-auto bg-white px-2 py-2 rounded-md shadow   h-8 mx-auto" src="@/assets/img/logo.png" alt="" />
            </div>

          <div class="col-span-2">
                <a @click="$router.push({path: '/license'})" title="" class="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"> License </a>
            </div>

              <div class="lg:order-2 col-span-2" >
                <a @click="$router.push({path: '/license'})" title="" class="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"> Policy </a>
            </div>

            <!-- <div class="lg:order-4">
                <a href="#" title="" class="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"> Services </a>
            </div>

            <div class="lg:order-5">
                <a href="#" title="" class="font-sans text-sm font-normal text-opacity-50 transition-all duration-200 rounded text-white hover:text-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary focus:text-opacity-100"> Contacts </a>
            </div> -->
        </div>
    </div>
</footer>
</template>

<script>
export default {

}
</script>

<style>

</style>