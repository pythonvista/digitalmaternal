<template>
  <section class=" py-8 bg-accent2">
    <div class="donation-container xl:flex xl:items-center xl:justify-center xl:flex-row  gap-5 xs:flex xs:flex-col xs:justify-center xs:items-center  ">
      <span><p class="xs:text-lg xl:text-lg xs:font-semibold text-accent4">Make your impact today</p></span>

      <span class="">
        <div class="rounded-[50px] py-6 w-[250px] border border-accent flex items-center pl-4 gap-3">
          <img src="@/assets/img/Vector.png" alt="">
          <input type="text" placeholder="Enter your amount" class=" border-none focus: outline-none">
        </div>
        
      </span>

      <span class="">
        <a href="" class="group flex items-center justify-center gap-2 border-2 border-accent rounded-3xl w-36 h-10 hover:bg-accent hover:text-white duration-300">
          <svg class="group-hover:fill-white" width="24" height="24" viewBox="0 0 24 24" fill="#BC3EB9" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <p>Donate Now</p>
        </a>
      </span>
      
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>