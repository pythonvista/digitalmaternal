<template>
  <section class="xs:px-5 md:px-10 bg-accent2 border-t border-black">
    <div class="flex flex-col w-full items-center justify-center py-5">
      <div class="flex w-full items-center justify-center">
        <div class="border-b border-black w-[10%]"></div>
        <span
          class="md:text-2xl xs:text-lg md:font-semibold xs:font-medium tracking-wider py-8 px-5"
          >Our Impact</span
        >
        <div class="border-b border-black w-[10%]"></div>
      </div>
      <span
        class="text-2xl md:text-5xl tracking-widest md:font-semibold xs:font-medium text-orange-400"
        >Past Projects</span
      >
    </div>

    <div class="content py-4">
        <span class=" text-lg ">
          <p>✔ July 2015 – Partnered with the FCT Primary Healthcare Board to distribute safe motherhood information and mama kits to pregnant women at PHC Kubwa.</p>  

          <p>✔ October 2015 – In partnership with the FCT Primary Healthcare Board and Kabash Love Foundation, conducted safe motherhood advocacy in Dakwa community, Bwari Area Council, Abuja, distributing mama kits to encourage antenatal care attendance.</p>

          <div class="py-5">
            <p>✔ February 2016 – Provided maternal health support at Kabusa IDP Camp, in collaboration with the FCT Primary Healthcare Board. Our team:</p>

            <ol class="py-3 list-decimal pl-10">
              <li>Immunized children</li>
              <li>Educated women on water hygiene and sanitation during pregnancy</li>
              <li>Conducted HIV testing and screening</li>
              <li>Distributed mama kits to pregnant women</li>
            </ol>
          </div>
          

          

        </span>
    </div>


    <div class="md:py-15 px-0 md:grid md:grid-cols-2 w-full h-full gap-5 text-center sm:text-start">
  <!-- Text Section (second on small screens) -->
  <div class="flex flex-col w-full justify-center items-center sm:items-start gap-4 p-5 order-1 sm:order-2">
    <span class="font-semibold xs:text-2xl md:text-3xl">Previous Projects</span>
    <span class="text-lg xs:text-center w-full">
      In February 2016, still in partnership with the FCT Primary Health Care Board, TAAF took advocacy and support to women in Kabusa IDP camp. The FCT primary health care board gave us technical support to immunize children, gave information on water hygiene and sanitation, especially in pregnancy and HIV testing and screening. Pregnant women were also given mama kits.
    </span>
  </div>

  <!-- Image Section (first on small screens) -->
  <div class="swipper-container order-2 sm:order-1">
    <img class="rounded-lg" src="@/assets/img/Pictures.png" alt="">
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