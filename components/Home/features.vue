<template>
  <section class="py-12 px-16 bg-gray-50 sm:py-16 lg:py-20">
    <div class="px-4 mx-auto  sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
        <h2
          class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj"
        >
          Cohort Clusters
        </h2>
      </div>

      <div
        class="grid  grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left"
      >
        <div class="space-y-4 relative sm:space-y-8">
          <div
            v-for="(i, index) in clusters.slice(0, 2)"
            :key="index"
            class="overflow-hidden border-2 relative border-solid border-orange-200 bg-white shadow-md rounded-xl"
          >
            <div class="p-3">
              <img class="rounded-md aspect-[16/9] shadow-md" :src="i.img" alt="" />
              <h3
                class="mt-8 text-2xl text-left font-bold text-gray-900 sm:mt-20 font-pj"
              >
                {{ i.title }}
              </h3>
              <p class="mt-3 text-base text-gray-600 font-pj text-left">
                {{ i.desc }}
              </p>
              <div class="w-full flex flex-col justify-start items-start">
                <p class="mt-5 text-base font-bold text-gray-900">
                  Learning Tracks
                </p>
                <ul class="mt-4 w-full space-y-1">
                  <li v-for="x in i.tracks" :key="x" class="text-left">
                    <span>⚫</span>
                    <span class="flex-1 text-base font-medium text-gray-900">
                      {{ x }}
                    </span>
                  </li>
                </ul>

                <div class="absolute bottom-3 right-4">
                  <q-btn    @click="openDialog( i.title)"
                    icon-right="chevron_right"
                    class="px-10 py-1 rounded-lg bg-orange-500 text-white font-bold"
                    >Enroll</q-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4 sm:space-y-8">
          <div
            v-for="(i, index) in clusters.slice(2, 4)"
            :key="index"
            class="overflow-hidden border-2 relative border-solid border-orange-200 bg-white shadow-md rounded-xl"
          >
            <div class="p-3">
              <img class="rounded-md aspect-[16/9] shadow-md" :src="i.img" alt="" />
              <h3
                class="mt-8 text-2xl text-left font-bold text-gray-900 sm:mt-20 font-pj"
              >
                {{ i.title }}
              </h3>
              <p class="mt-3 text-base text-gray-600 font-pj text-left">
                {{ i.desc }}
              </p>
              <div class="w-full flex flex-col justify-start items-start">
                <p class="mt-5 text-base font-bold text-gray-900">
                  Learning Tracks
                </p>
                <ul class="mt-4 w-full space-y-1">
                  <li v-for="x in i.tracks" :key="x" class="text-left">
                    <span>⚫</span>
                    <span class="flex-1 text-base font-medium text-gray-900">
                      {{ x }}
                    </span>
                  </li>
                </ul>

                <div class="absolute bottom-3 right-4">
                  <q-btn 
                  @click="openDialog( i.title)"
                    icon-right="chevron_right"
                    class="px-10 py-1 rounded-lg bg-orange-500 text-white font-bold"
                    >Enroll</q-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['openDialog'],
  data: () => ({
    clusters: [
      {
        title: "Technical Development Cluster",
        desc: "This domain covers software development, product design, and data science, equipping learners with the skills to create, optimize, and innovate in the tech industry.",
        tracks: [
          "Frontend Development",
          "Backend Development",
          "Product Design",
          "Data Science",
        ],
        img: "https://i.imgur.com/1ARGEMy.jpeg",
      },
      {
        title: "Creative Media Cluster",
        desc: "This domain focuses on visual storytelling and digital content creation, providing skills in video editing, filmmaking, photography, and animation to bring ideas to life.",
        tracks: ["Video Editing", "Filmmaking", "Photography", "Animation"],
         img: "https://i.imgur.com/xqOOZpj.jpeg",
        
      },
      {
        title: "Marketing & Content Cluster",
        desc: "Covering digital marketing, sound design, music production, and writing, this cluster empowers learners to craft compelling content and develop impactful brand strategies.",
        tracks: ["Digital Marketing", "Sound Design", "Music", "Writing"],
        img: "https://i.imgur.com/owwALZI.jpeg",
      },
      {
        title: "Technology & Security Cluster",
        desc: "Focused on building secure and intelligent systems, this cluster includes cybersecurity, cloud computing, robotics, and quality assurance to ensure reliable digital solutions.",
        tracks: [
          "Quality Assurance",
          "Robotics",
          "Cybersecurity",
          "Cloud Computing",
        ],
        img: "https://i.imgur.com/Pav4GIe.jpeg",
      },
      {
        title: "Visual & Interactive Design Cluster",
        desc: "This domain explores advanced digital artistry and interactive experiences, covering extended reality, motion visuals, illustration, and graphic design.",
        tracks: [
          "Extended Reality (XR/VR)",
          "Motion Visuals",
          "Illustration",
          "Graphics Design",
        ],
        img: "https://i.imgur.com/dRycWT9.jpeg",
      },
    ],
  }),
};
</script>

<style>
</style>