<template>
  <section class="bg-yellow-50  overflow-hidden">
    <div class="flex xs:flex-col lg:flex-row lg:items-stretch lg:min-h-screen">
      <div
        class="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12"
      >
        <div class="absolute bottom-0 right-0 block">
          <img
            class="object-contain w-auto h-48"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
            alt=""
          />
        </div>

        <div
          class="relative px-4 pt-24 pb-16 xs:text-center sm:px-6 md:px-24 2xl:px-32 space-y-2 lg:py-24 lg:text-left"
        >
          <span
            class="bg-yellow-300 px-2 py-1 rounded-md shadow animate__animated animate__backInDown"
            >2025 Edition</span
          >
          <h1
            class="xs:text-3xl md:text-4xl font-bold text-black sm:text-6xl xl:text-6xl animate__animated animate__backInLeft"
          >
            INNOVATE EKITI #1 <br>
            Skill-Up Cohort
          </h1>
          <p class="mt-5 text-xl text-black">
            Master the fundamental skills needed to thrive in today’s digital
            world. From navigating the internet safely and using productivity
            tools effectively to understanding social media, cloud computing,
            and data security.
          </p>
          <div class="mt-10 flex xs:flex-col md:flex-row  item-center xs:justify-center lg:justify-start gap-4">
              <button
              class="inline-flex items-center xs:w-full md:w-[180px] justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-lg bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600"
            >
              {{ countdown || '15d 12h 47m 4s' }}
            </button>  
            <q-btn
            @click="openDialog(null)"
              class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-lg bg-black text-white  focus:bg-orange-600"
              >Enroll Now</q-btn
            >
          
          </div>

          <p class="mt-5 text-base text-black">
            Cohort Registration Ends 25th Of February
          </p>
        </div>
      </div>

      <div
        class="relative w-full overflow-hidden lg:order-1 xs:h-96 lg:h-auto lg:w-5/12"
      >
        <div class="absolute inset-0">
          <img
            class="object-contain bg-orange-200 w-full h-full "
            src="https://i.imgur.com/rezci4W.png"
            alt=""
          />
        </div>

        <div
          class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
        ></div>

        <div class="absolute bottom-0 left-0">
          <div class="p-4 sm:p-6 lg:p-8">
            <div class="flex items-center">
              <svg
                class="w-5 h-5 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clip-rule="evenodd"
                />
              </svg>
              <h2 class="font-bold text-white text-3xl ml-2.5">395+</h2>
            </div>
            <p class="max-w-xs mt-1.5 text-xl text-white">
              Professionals Have Transformed Their Careers Through Our Cohort
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import moment from "moment";
import "animate.css";
export default {
  props: ["openDialog"],
  data() {
    return {
      countdown: "",
      deadline: moment("2025-02-22 23:59:59"), // Set the deadline time
    };
  },
  methods: {
    updateCountdown() {
      const now = moment();
      const duration = moment.duration(this.deadline.diff(now));

      if (duration.asSeconds() <= 0) {
        this.countdown = "Registration Closed";
      } else {
        this.countdown = `${duration.days()}d ${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`;
      }
    },
  },
  mounted() {
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>