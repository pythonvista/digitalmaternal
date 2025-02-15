<template>
  <section class="header">
    <div class="first-header bg-primary w-full h-16 lg:flex flex-row items-center justify-around xs:hidden   ">
      <div class="contacts flex items-center gap-7">
        <span class="phone flex gap-3">
          <img src="@/assets/img/call.png" alt="">
          <a href=""><p class=" text-base">+234 806 355 7893</p></a>
        </span>

        <span class="email flex gap-3">
          <img src="@/assets/img/mail.png" alt="">
          <p class="text-base">support@digitalsolutions4maternalhealth.org</p>
        </span>
      </div>

      <div class="socials flex gap-3">
        <a href="" class=" hover:scale-150 transition-transform duration-300"><img src="@/assets/img/fb.png" alt=""></a>
        <a href="" class=" hover:scale-150 transition-transform duration-300"><img src="@/assets/img/youtube.png" alt=""></a>
        <a href="" class=" hover:scale-150 transition-transform duration-300"><img src="@/assets/img/twitter.png" alt=""></a>
        <a href="" class=" hover:scale-150 transition-transform duration-300"><img src="@/assets/img/linkdn.png" alt=""></a>
        <a href="" class=" hover:scale-150 transition-transform duration-300"><img src="@/assets/img/insta.png" alt=""></a>
        
        
        
        
        
      </div>
    </div>

    <div class="second-header bg-basecolor pl-32 pr-32 flex items-center justify-between xs:h-[101px] xs:pl-2 xs:pr-2 sm:pl-5 sm:pr-5">
      <div class="left-section  flex items-center gap-10">
        <span class="logo hover:scale-110 transition-transform duration-300"><a href=""><img src="@/assets/img/logo.png" alt=""></a></span>

        <span class="links flex gap-10 sm:hidden xs:hidden lg:flex">
          <a href="" class=" text-lg font-medium hover:text-accent duration-300 text-[#575757] ">Home</a>
          <a href="" class=" text-lg font-medium  hover:text-accent duration-300  text-[#575757]">Our articles</a>
          <a href="" class=" text-lg font-medium  hover:text-accent duration-300  text-[#575757]">Stories</a>
          <a href="" class=" text-lg font-medium  hover:text-accent duration-300  text-[#575757]">Contact</a>
          
        </span>
      </div>

        <div class="right-section flex gap-5 items-center pr-2 ">
          <span>
            <a href="#" class="group bg-accent flex items-center justify-center text-white gap-2 rounded-3xl w-36 h-10 hover:!bg-white   transition duration-300  hover:text-accent hover:border-2 border-accent xs:w-24">

            <svg class="fill-white transition duration-300 group-hover:fill-accent xs:w-4 xs:h-4" 
              width="24" height="24" viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>

            <p class="transition duration-300 group-hover:text-accent xs:text-sm">Donate</p>
          </a>

          </span>

          <div class="search hover:scale-110 transition-transform duration-300">
            <a href="" class=" hover: ">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1 20.5125L13.5 14.9125C13 15.3125 12.425 15.6292 11.775 15.8625C11.125 16.0958 10.4333 16.2125 9.69995 16.2125C7.88328 16.2125 6.34578 15.5833 5.08745 14.325C3.82912 13.0667 3.19995 11.5292 3.19995 9.71249C3.19995 7.89583 3.82912 6.35833 5.08745 5.09999C6.34578 3.84166 7.88328 3.21249 9.69995 3.21249C11.5166 3.21249 13.0541 3.84166 14.3125 5.09999C15.5708 6.35833 16.2 7.89583 16.2 9.71249C16.2 10.4458 16.0833 11.1375 15.85 11.7875C15.6166 12.4375 15.3 13.0125 14.9 13.5125L20.525 19.1375C20.7083 19.3208 20.8 19.5458 20.8 19.8125C20.8 20.0792 20.7 20.3125 20.5 20.5125C20.3166 20.6958 20.0833 20.7875 19.8 20.7875C19.5166 20.7875 19.2833 20.6958 19.1 20.5125ZM9.69995 14.2125C10.95 14.2125 12.0125 13.775 12.8875 12.9C13.7625 12.025 14.2 10.9625 14.2 9.71249C14.2 8.46249 13.7625 7.39999 12.8875 6.52499C12.0125 5.64999 10.95 5.21249 9.69995 5.21249C8.44995 5.21249 7.38745 5.64999 6.51245 6.52499C5.63745 7.39999 5.19995 8.46249 5.19995 9.71249C5.19995 10.9625 5.63745 12.025 6.51245 12.9C7.38745 13.775 8.44995 14.2125 9.69995 14.2125Z" fill="#BC3EB9"/>
              </svg>

            </a>
          </div>

          <div class="hamburger hover:scale-110 transition-transform duration-300">
            <a href="">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_195_790" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_195_790)">
                <path d="M4 18C3.71667 18 3.47917 17.9042 3.2875 17.7125C3.09583 17.5208 3 17.2833 3 17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H20C20.2833 16 20.5208 16.0958 20.7125 16.2875C20.9042 16.4792 21 16.7167 21 17C21 17.2833 20.9042 17.5208 20.7125 17.7125C20.5208 17.9042 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z" fill="#BC3EB9"/>
                </g>
              </svg>

            </a>
            
          </div>
        </div>
      </div>
    
  </section>

</template>

<script>
export default {

}
</script>

<style>

</style>