<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-orange-50">
    <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
      <div>
        <h2 class="font-sans text-2xl font-normal text-black">
          {{ selectedTrack?.cluster.title }}
        </h2>
        <p class="mt-6 text-3xl tracking-tighter text-black font-bold">
          {{ selectedTrack?.track.name }}
        </p>
        <p class="max-w-md mt-6 font-sans text-lg text-opacity-50 text-black">
          {{ selectedTrack?.cluster.desc }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 mt-16 md:grid-cols-2">
        <div
          class="self-start overflow-hidden transition-all bg-white duration-200 border rounded-lg border-neutral hover:bg-dark-gray"
        >
          <div class="relative">
            <div class="aspect-w-16 aspect-h-9">
              <img
                class="object-cover w-full h-full opacity-60"
                :src="selectedTrack.cluster.img"
                alt=""
              />
            </div>

            <div
              class="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <button
              @click="dialog = !dialog"
                type="button"
                class="inline-flex items-center justify-center w-16 h-16 transition-all duration-200 border-2 rounded-full text-black border-primary hover:bg-white hover:bg-opacity-20"
              >
                <svg
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.0416 4.91926C7.37507 4.51934 6.5271 4.99945 6.5271 5.77675L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8575C19.061 12.4691 19.061 11.5309 18.4137 11.1425L8.0416 4.91926Z"
                  />
                </svg>
              </button>
              <span class="mt-5 text-base text-black font-bold">
                Play Intro
              </span>
            </div>
          </div>

          <div class="px-8 py-12">
            <h3 class="font-serif text-2xl font-semibold text-black">
              What you will learn
            </h3>
            <p
              class="mt-4 font-sans text-lg font-normal text-opacity-50 text-black"
            >
              Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa
              mauris amet lorem fusce. Iaculis id viverra ut semper mattis
              pellentesque. Porttitor donec enim tristique amet faucibus laoreet
              pharetra. Enim nec et, posuere sed fusce augue at egestas. Augue a
              nam purus nunc. Elementum nisl pretium blandit diam mollis.
            </p>

            <ul
              class="mt-10 space-y-3 font-sans text-base font-normal text-black"
            >
              <li class="flex items-center">
                <div
                  class="inline-flex flex-nowrap items-center justify-center flex-shrink-0 w-8 h-8 mr-4 border rounded-full border-primary"
                >
                  <svg
                    class="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9354 6.55397C14.1949 6.75575 14.2418 7.12971 14.04 7.38923L9.41207 13.3415C9.309 13.4741 9.15475 13.557 8.98731 13.5697C8.81989 13.5825 8.65487 13.5239 8.53293 13.4084L6.01804 11.0275C5.77932 10.8015 5.76901 10.4248 5.99502 10.186C6.22102 9.94732 6.59776 9.93701 6.83648 10.163L8.87495 12.0929L13.1001 6.65852C13.3019 6.399 13.6759 6.35219 13.9354 6.55397Z"
                    />
                  </svg>
                </div>
                Et enim nisl viverra molestie risus.
              </li>

              <li class="flex items-center flex-nowrap">
                <div
                  class="inline-flex flex-nowrap items-center justify-center flex-shrink-0 w-8 h-8 mr-4 border rounded-full border-primary"
                >
                  <svg
                    class="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9354 6.55397C14.1949 6.75575 14.2418 7.12971 14.04 7.38923L9.41207 13.3415C9.309 13.4741 9.15475 13.557 8.98731 13.5697C8.81989 13.5825 8.65487 13.5239 8.53293 13.4084L6.01804 11.0275C5.77932 10.8015 5.76901 10.4248 5.99502 10.186C6.22102 9.94732 6.59776 9.93701 6.83648 10.163L8.87495 12.0929L13.1001 6.65852C13.3019 6.399 13.6759 6.35219 13.9354 6.55397Z"
                    />
                  </svg>
                </div>
                Et enim nisl viverra molestie risus.
              </li>

              <li class="flex items-center flex-nowrap">
                <div
                  class="inline-flex flex-nowrap items-center justify-center flex-shrink-0 w-8 h-8 mr-4 border rounded-full border-primary"
                >
                  <svg
                    class="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9354 6.55397C14.1949 6.75575 14.2418 7.12971 14.04 7.38923L9.41207 13.3415C9.309 13.4741 9.15475 13.557 8.98731 13.5697C8.81989 13.5825 8.65487 13.5239 8.53293 13.4084L6.01804 11.0275C5.77932 10.8015 5.76901 10.4248 5.99502 10.186C6.22102 9.94732 6.59776 9.93701 6.83648 10.163L8.87495 12.0929L13.1001 6.65852C13.3019 6.399 13.6759 6.35219 13.9354 6.55397Z"
                    />
                  </svg>
                </div>
                Et enim nisl viverra molestie risus.
              </li>

              <li class="flex flex-nowrap items-center">
                <div
                  class="inline-flex flex-nowrap items-center justify-center flex-shrink-0 w-8 h-8 mr-4 border rounded-full border-primary"
                >
                  <svg
                    class="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9354 6.55397C14.1949 6.75575 14.2418 7.12971 14.04 7.38923L9.41207 13.3415C9.309 13.4741 9.15475 13.557 8.98731 13.5697C8.81989 13.5825 8.65487 13.5239 8.53293 13.4084L6.01804 11.0275C5.77932 10.8015 5.76901 10.4248 5.99502 10.186C6.22102 9.94732 6.59776 9.93701 6.83648 10.163L8.87495 12.0929L13.1001 6.65852C13.3019 6.399 13.6759 6.35219 13.9354 6.55397Z"
                    />
                  </svg>
                </div>
                Et enim nisl viverra molestie risus.
              </li>
            </ul>
          </div>
        </div>

        <div class="space-y-6">
          <div
            class="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray"
          >
            <div class="px-8 py-10">
              <h4 class="font-sans text-base font-normal uppercase text-black">
                Instructor
              </h4>
              <div class="relative mt-5">
                <img
                  @click="InitUpload"
                  class="w-28 h-28 rounded-full border-2 border-solid border-orange-400 shadow-md overflow-hidden"
                  src="https://i.imgur.com/CoO932m.png"
                  alt=""
                />
              </div>
              <p class="mt-6 font-serif text-4xl i text-black">Emeter Victor</p>
              <p
                class="mt-5 font-sans text-lg font-normal text-opacity-50 text-black"
              >
                Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa
                mauris amet lorem fusce. Iaculis id viverra ut semper mattis
                pellentesque. Porttitor donec enim tristique amet faucibus
                laoreet pharetra. Enim nec et, hsdfkhdssklfhsfsdhf ikhsl
              </p>
            </div>
          </div>

          <div
            class="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray"
          >
            <div class="px-8 py-10">
              <h4 class="font-sans text-base font-normal uppercase text-black">
                Lorem ipsum
              </h4>
              <p class="mt-6 font-serif text-4xl italic text-black">
                Week 2 - Week 5
              </p>
              <p
                class="mt-5 font-sans text-lg font-normal text-opacity-50 text-black"
              >
                Etiam orci, tellus vestibulum sem in viverra quisque. Mi massa
                mauris amet lorem fusce. Iaculis id viverra ut semper mattis
                pellentesque. Porttitor donec enim tristique amet faucibus
                laoreet pharetra. Enim nec et, posuere sed fusce augue at
                egestas. Augue a nam purus nunc. Elementum nisl pretium blandit
                diam mollis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <q-dialog v-model="dialog">
      <div class="bg-white rounded-lg w-full h-[315px]"><iframe class="w-full h-full" src="https://www.youtube.com/embed/5r7iSecGjgo?si=7jH_0389fdLfeRJh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
    </q-dialog>
  </section>
</template>

<script>
export default {
  props: ["selectedTrack"],
  data: () => ({
    dialog: false,
  }),
  created() {
    setTimeout(() => {
      this.dialog = true;
    }, 1500);
  },
};
</script>

<style>
</style>