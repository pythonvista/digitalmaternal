<template>
  <section class="relative py-12 bg-gray-900 sm:py-16 lg:py-20 xl:py-32">
    <div class="absolute inset-0">
      <img
        class="object-cover w-full h-full"
        :src="clusterImg || 'https://i.imgur.com/rezci4W.png'"
        alt=""
      />
    </div>
    <div class="absolute inset-0 bg-gray-900/70 lg:bg-gray-900/50"></div>
    <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="text-center flex flex-col justify-center items-center gap-2">
        <div v-if="track"
          class="inline-flex items-center justify-center shadow-md w-10 h-10 mx-auto bg-pink-50 rounded-full"
        >
          <lord-icon
            :src="trackImg || 'https://cdn.lordicon.com/ogjpwrxe.json'"
            trigger="loop"
            colors="primary:#121331,secondary:#ee6d66"
            style="width: 30px; height: 30px"
          >
          </lord-icon>
        </div>
        <h1 class="text-2xl font-bold text-white sm:text-3xl lg:text-5xl">
          INNOVATE EKITI #1 Skill-Up Cohort
        </h1>

        <p v-if="cluster" class="text-white mb-2">
          {{ cluster || "Technical Department Cluster" }}
        </p>

        <span
          v-if="track"
          class="bg-orange-500 rounded-md text-white shadow-md px-2 py-1"
          >{{ track || "Frontend Development" }}</span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["cluster", "track", "clusterImg", "trackImg"],
  data: () => ({
    tracks: [
      {
        name: "Frontend Development",
        img: "https://cdn.lordicon.com/ogjpwrxe.json",
        url: "https://example.com/frontend-development",
      },
      {
        name: "Backend Development",
        img: "https://cdn.lordicon.com/nfuackpv.json",
        url: "https://example.com/backend-development",
      },
      {
        name: "Product Design",
        img: "https://cdn.lordicon.com/exymduqj.json",
        url: "https://example.com/product-design",
      },
      {
        name: "Data Science",
        img: "https://cdn.lordicon.com/fjvfsqea.json",
        url: "https://example.com/data-science",
      },
      {
        name: "Video Editing",
        img: "https://cdn.lordicon.com/tamskqkf.json",
        url: "https://example.com/video-editing",
      },
      {
        name: "Filmmaking",
        img: "https://cdn.lordicon.com/ugllxeyl.json",
        url: "https://example.com/filmmaking",
      },
      {
        name: "Photography",
        img: "https://cdn.lordicon.com/wsaaegar.json",
        url: "https://example.com/photography",
      },
      {
        name: "Animation",
        img: "https://cdn.lordicon.com/zbczzsip.json",
        url: "https://example.com/animation",
      },
      {
        name: "Digital Marketing",
        img: "https://cdn.lordicon.com/dkobpcrm.json",
        url: "https://example.com/digital-marketing",
      },
      {
        name: "Sound Design",
        img: "https://cdn.lordicon.com/vycwlttg.json",
        url: "https://example.com/sound-design",
      },
      {
        name: "Music",
        img: "https://cdn.lordicon.com/cqefxcni.json",
        url: "https://example.com/music",
      },
      {
        name: "Writing",
        img: "https://cdn.lordicon.com/fikcyfpp.json",
        url: "https://example.com/writing",
      },
      {
        name: "Quality Assurance",
        img: "https://cdn.lordicon.com/cvwrvyjv.json",
        url: "https://example.com/quality-assurance",
      },
      {
        name: "Robotics",
        img: "https://cdn.lordicon.com/vmkushle.json",
        url: "https://example.com/robotics",
      },
      {
        name: "Cybersecurity",
        img: "path/to/cybersecurity-image.jpg",
        url: "https://example.com/cybersecurity",
      },
      {
        name: "Cloud Computing",
        img: "path/to/cloud-computing-image.jpg",
        url: "https://example.com/cloud-computing",
      },
      {
        name: "Extended Reality",
        img: "path/to/extended-reality-image.jpg",
        url: "https://example.com/extended-reality",
      },
      {
        name: "Motion Visuals",
        img: "path/to/motion-visuals-image.jpg",
        url: "https://example.com/motion-visuals",
      },
      {
        name: "Illustration",
        img: "path/to/illustration-image.jpg",
        url: "https://example.com/illustration",
      },
      {
        name: "Graphics Design",
        img: "path/to/graphics-design-image.jpg",
        url: "https://example.com/graphics-design",
      },
    ],
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
        img: "https://i.imgur.com/UxL40Ld.jpeg",
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