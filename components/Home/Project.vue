<template>
  <div class="project relative py-16 overflow-hidden">
    <div class="header-wrapper">
      <div class="header flex items-center justify-center flex-col pb-7">
        <h1 class="text-2xl font-bold">Project</h1>
        <div class="border-b-2 border-black w-[160px] pt-1"></div>
        <h2 class="text-lg text-purple-500 font-bold pt-1">Ongoing Project</h2>
      </div>
    </div>

    <section class="relative px-10 border-solid">
      <div class="content-wrapper h-full w-full grid grid-cols-2 gap-10">
        <div
          class="flex flex-col xs:col-span-2 gap-3 xs:order-last md:order-first md:col-span-1 justify-center"
        >
          <p
            class="font-bold xs:text-2xl xs:text-center md:text-left md:text-6xl text-accent4"
          >
            Maisha Save a <br />Mother’s Life
          </p>
          <p
            class="xs:text-base md:text-lg xs:text-center md:text-left font-medium"
          >
            Through advocacy & awareness campaigns, we empower communities with
            the knowledge to reduce maternal mortality rates. 📍 Impact: Trained
            100+ birth attendants & educated 10,000+ women on safe pregnancy
            practices. Distributed 2,000+ of mama kits to women in IDP camps and
            low income communities
          </p>
          <div>
            <q-btn
              :to="{
                path: '/blog/info',
                query: { id: '07969f3f-8e22-4065-8b72-8ae2fbde1468' },
              }"
              color="purple"
              >Read More</q-btn
            >
          </div>
        </div>

        <div
          class="project-right xs:col-span-2 xs:order-first md:order-last md:col-span-1 z-[11] flex justify-center items-center w-full relative"
        >
          <img
            src="@/assets/img/projectimg.png"
            class="w-[70%] rounded-md"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="relative px-10 mt-10 mb-10 border-solid">
      <div class="content-wrapper h-full w-full grid grid-cols-2 gap-10">
        <div
          class="project-right xs:col-span-2 xs:order-last md:order-first md:col-span-1 z-[11] flex justify-center items-center w-full relative"
        >
          <img
            src="@/assets/img/hygiene.png"
            class="w-[70%] rounded-md"
            alt=""
          />
        </div>
        <div
          class="flex flex-col xs:col-span-2 gap-3 xs:order-first md:order-last md:col-span-1 justify-center"
        >
          <p
            class="font-bold xs:text-2xl xs:text-center md:text-left md:text-6xl text-accent4"
          >
            HER Hygiene & HER (HHH) Campaign
          </p>
          <p
            class="xs:text-base md:text-lg xs:text-center md:text-left font-medium"
          >
            We promote menstrual hygiene management to help young girls stay
            safe, healthy & confident. 📍 Impact: Distributed 10,000+ sanitary
            kits in rural areas.
          </p>
          <div>
            <q-btn
              :to="{
                path: '/blog/info',
                query: { id: 'de7bf629-b8bb-4fc2-b54c-4f233bdb5157' },
              }"
              color="purple"
              >Read More</q-btn
            >
          </div>
        </div>
      </div>
    </section>

    <section class="relative px-10 mt-10 mb-10 border-solid">
      <div class="content-wrapper h-full w-full grid grid-cols-2 gap-10">
        <div
          class="flex flex-col xs:col-span-2 gap-3 xs:order-last md:order-first md:col-span-1 justify-center"
        >
          <p
            class="font-bold xs:text-2xl xs:text-center md:text-left md:text-6xl text-accent4"
          >
            Child Rights Advocacy
          </p>
          <p
            class="xs:text-base md:text-lg xs:text-center md:text-left font-medium"
          >
            We work with NACCRAN to protect children’s rights under
            the African Charter on the Rights & Welfare of a Child (ACRWC). 📍
            Impact: Advocated for policy changes benefiting 100,000+ children.
          </p>
          <div>
            <q-btn
              :to="{
                path: '/blog/info',
                query: { id: '061c6453-a6db-4e70-b378-2c6fadb4e31f' },
              }"
              color="purple"
              >Read More</q-btn
            >
          </div>
        </div>

        <div
          class="project-right xs:col-span-2 xs:order-first md:order-last md:col-span-1 z-[11] flex justify-center items-center w-full relative"
        >
          <img src="@/assets/img/child.png" class="w-[70%] rounded-md" alt="" />
        </div>
      </div>
    </section>

     <section class="relative px-10 mt-10 mb-10 border-solid">
      <div class="content-wrapper h-full w-full grid grid-cols-2 gap-10">
        <div
          class="project-right xs:col-span-2 xs:order-last md:order-first md:col-span-1 z-[11] flex justify-center items-center w-full relative"
        >
          <img
            src="@/assets/img/hygiene.png"
            class="w-[70%] rounded-md"
            alt=""
          />
        </div>
        <div
          class="flex flex-col xs:col-span-2 gap-3 xs:order-first md:order-last md:col-span-1 justify-center"
        >
          <p
            class="font-bold xs:text-lg xs:text-center md:text-left md:text-3xl text-accent4"
          >
           Addressing Gaps in Policy & Access to Reproductive Healthcare for Women in Conflict

          </p>
          <p
            class="xs:text-base md:text-lg xs:text-center md:text-left font-medium"
          >
            We advocate for policy reforms, improved healthcare infrastructure, and inter-agency collaboration to support displaced women and girls affected by conflict.

          </p>
          <div>
            <q-btn
              :to="{
                path: '/blog/info',
                query: { id: '9c5d26da-7676-46c4-b851-d9892e4c22ac' },
              }"
              color="purple"
              >Read More</q-btn
            >
          </div>
        </div>
      </div>
    </section>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute bottom-0 md:h-[8rem] left-0 w-full"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      style="margin-top: -2.0rem; width: 100%; display: block"
    >
      <path
        fill="#7123B3E8"
        d="M0,224L40,218.7C80,213,160,203,240,213.3C320,224,400,256,480,240C560,224,640,160,720,144C800,128,880,160,960,149.3C1040,139,1120,85,1200,96C1280,107,1360,181,1400,218.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "Maisha Save a Mother’s Life",
        id: 1,
        desc: " Through advocacy & awareness campaigns, we empower communities with the knowledge to reduce maternal mortality rates. 📍 Impact: Trained 100+ birth attendants & educated 10,000+ women on safe pregnancy practices. Distributed 2,000+ of mama kits to women in IDP camps and low income communities",
      },
    ],
  }),
};
</script>

<style>
</style>