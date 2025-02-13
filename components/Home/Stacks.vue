<template>
  <section
    class="py-12 border-b-2 border-orange-200 bg-gray-50 sm:py-16 lg:py-20"
  >
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto text-center xl:max-w-3xl">
        <h2
          class="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj"
        >
          Over 15+ learning tracks covering over 4 digital skill sectors
        </h2>
      </div>
    </div>

    <div class="mt-9 lg:mt-20">
      <div class="xs:px-5">
        <div class="w-full py-4 overflow-hidden">
          <div
            class="grid xs:grid-cols-3 gap-5 text-center lg:grid-cols-6 lg:gap-6 xl:gap-10"
          >
            <div
              @click="
                dialog = !dialog;
                selectTrack(i.clusterId, i);
              "
              v-for="(i, index) in tracks.slice(0, 6)"
              :key="index"
              class="overflow-hidden cursor-pointer hover:shadow-lg bg-white shadow-md rounded-xl"
            >
              <div class="p-4 sm:p-8">
                <div
                  class="inline-flex items-center justify-center w-10 h-10 mx-auto rounded-full shadow-md sm:w-20 sm:h-20 bg-orange-50"
                >
                  <lord-icon
                    :src="i.img"
                    trigger="loop"
                    colors="primary:#121331,secondary:#ee6d66"
                    style="width: 30px; height: 30px"
                  >
                  </lord-icon>
                </div>
                <p
                  class="mt-2 xs:text-sm font-bold text-gray-900 sm:mt-3 text-center md:text-sm"
                >
                  {{ i.name }}
                </p>
              </div>
            </div>
          </div>

          <div
            class="grid grid-cols-3 gap-5 mt-5 text-center lg:grid-cols-6 lg:gap-6 lg:mt-5 xl:mt-9 xl:gap-8"
          >
            <div
              @click="
                dialog = !dialog;
                selectTrack(i.clusterId, i);
              "
              v-for="(i, index) in tracks.slice(8, 14)"
              :key="index"
              class="overflow-hidden cursor-pointer hover:shadow-lg bg-white shadow-md rounded-xl"
            >
              <div class="p-4 sm:p-8">
                <div
                  class="inline-flex items-center justify-center shadow-md w-10 h-10 mx-auto bg-pink-50 rounded-full sm:w-20 sm:h-20"
                >
                  <lord-icon
                    :src="i.img"
                    trigger="loop"
                    colors="primary:#121331,secondary:#ee6d66"
                    style="width: 30px; height: 30px"
                  >
                  </lord-icon>
                </div>
                <p
                  class="mt-2 text-sm font-bold text-gray-900 sm:mt-3 sm:text-lg md:text-sm font-pj"
                >
                  {{ i.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="px-4 mx-auto mt-12 lg:mt-20 max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <a
          href="#"
          title=""
          class="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
        >
          Check all {{ tracks.length }} Tracks
        </a>
      </div>
    </div> -->
    <q-dialog maximized  transition-show="slide-up"
      transition-hide="slide-down" v-model="dialog">
      <div class="w-full relative">
        <div class="absolute top-2 right-2">
          <q-btn
            color="orange"
            @click="dialog = !dialog"
            round
            dense
            class="text-black"
            icon="close"
          ></q-btn>
        </div>
        <UtilsStackInfo :selectedTrack="selectedTrack"></UtilsStackInfo>
      </div>
    </q-dialog>
  </section>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    tracks: [
      {
        name: "Frontend Development",
        img: "https://cdn.lordicon.com/ogjpwrxe.json",
        url: "https://example.com/frontend-development",
        clusterId: 1,
      },
      {
        name: "Backend Development",
        img: "https://cdn.lordicon.com/nfuackpv.json",
        url: "https://example.com/backend-development",
        clusterId: 1,
      },
      {
        name: "Product Design",
        img: "https://cdn.lordicon.com/exymduqj.json",
        url: "https://example.com/product-design",
        clusterId: 1,
      },
      {
        name: "Data Science",
        img: "https://cdn.lordicon.com/fjvfsqea.json",
        url: "https://example.com/data-science",
        clusterId: 1,
      },
      {
        name: "Video Editing",
        img: "https://cdn.lordicon.com/tamskqkf.json",
        url: "https://example.com/video-editing",
        clusterId: 2,
      },
      {
        name: "Filmmaking",
        img: "https://cdn.lordicon.com/ugllxeyl.json",
        url: "https://example.com/filmmaking",
        clusterId: 2,
      },
      {
        name: "Photography",
        img: "https://cdn.lordicon.com/wsaaegar.json",
        url: "https://example.com/photography",
        clusterId: 2,
      },
      {
        name: "Animation",
        img: "https://cdn.lordicon.com/zbczzsip.json",
        url: "https://example.com/animation",
        clusterId: 2,
      },
      {
        name: "Digital Marketing",
        img: "https://cdn.lordicon.com/dkobpcrm.json",
        url: "https://example.com/digital-marketing",
        clusterId: 3,
      },
      {
        name: "Sound Design",
        img: "https://cdn.lordicon.com/vycwlttg.json",
        url: "https://example.com/sound-design",
        clusterId: 3,
      },
      {
        name: "Music",
        img: "https://cdn.lordicon.com/cqefxcni.json",
        url: "https://example.com/music",
        clusterId: 3,
      },
      {
        name: "Writing",
        img: "https://cdn.lordicon.com/fikcyfpp.json",
        url: "https://example.com/writing",
        clusterId: 3,
      },
      {
        name: "Quality Assurance",
        img: "https://cdn.lordicon.com/cvwrvyjv.json",
        url: "https://example.com/quality-assurance",
        clusterId: 4,
      },
      {
        name: "Robotics",
        img: "https://cdn.lordicon.com/vmkushle.json",
        url: "https://example.com/robotics",
        clusterId: 4,
      },
      {
        name: "Cybersecurity",
        img: "path/to/cybersecurity-image.jpg",
        url: "https://example.com/cybersecurity",
        clusterId: 4,
      },
      {
        name: "Cloud Computing",
        img: "path/to/cloud-computing-image.jpg",
        url: "https://example.com/cloud-computing",
        clusterId: 4,
      },
      {
        name: "Extended Reality",
        img: "path/to/extended-reality-image.jpg",
        url: "https://example.com/extended-reality",
        clusterId: 5,
      },
      {
        name: "Motion Visuals",
        img: "path/to/motion-visuals-image.jpg",
        url: "https://example.com/motion-visuals",
        clusterId: 5,
      },
      {
        name: "Illustration",
        img: "path/to/illustration-image.jpg",
        url: "https://example.com/illustration",
        clusterId: 5,
      },
      {
        name: "Graphics Design",
        img: "path/to/graphics-design-image.jpg",
        url: "https://example.com/graphics-design",
        clusterId: 5,
      },
    ],
    selectedTrack: {},
    clusters: [
      {
        id: 1,
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
        id: 2,
        title: "Creative Media Cluster",
        desc: "This domain focuses on visual storytelling and digital content creation, providing skills in video editing, filmmaking, photography, and animation to bring ideas to life.",
        tracks: ["Video Editing", "Filmmaking", "Photography", "Animation"],
        img: "https://i.imgur.com/xqOOZpj.jpeg",
      },
      {
        id: 3,

        title: "Marketing & Content Cluster",
        desc: "Covering digital marketing, sound design, music production, and writing, this cluster empowers learners to craft compelling content and develop impactful brand strategies.",
        tracks: ["Digital Marketing", "Sound Design", "Music", "Writing"],
        img: "https://i.imgur.com/owwALZI.jpeg",
      },
      {
        id: 4,
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
  methods: {
    selectTrack(i, track) {
      console.log(i);
      let cluster = this.clusters.find((v) => v.id === i) || null
      if (cluster) {
        this.selectedTrack = {cluster: cluster, track: track}
      }
    },
  },
};
</script>

<style>
</style>