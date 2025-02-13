<template>
  <div class="w-full">
    <UtilsHeaderPage
      :clusterImg="clusterImg"
      :cluster="dform.cluster"
      :track="dform.track"
      :trackImg="trackImg"
    ></UtilsHeaderPage>
   
    <q-stepper v-model="step" ref="stepper" animated class="shadow-none py-10">
      <q-step :name="1" :done="step > 1">
        <div class="flex flex-col gap-10 justify-start items-start pb-10">
          <div
            class="w-full px-3 flex flex-col justify-center gap-2 items-start"
          >
            <p class="text-black text-lg mb-4 font-bold">Learning Pathway</p>
            <p class="text-black text-md">Select Desired Cluster*</p>

            <q-select
              :options="
                clusters.map((v) => ({
                  label: v.title,
                  value: v.title,
                  tracks: v.tracks,
                  img: v.img,
                }))
              "
              @update:model-value="(v) => updateCluster(v)"
              v-model="clusr"
              label="Select Cluster"
              standout="bg-orange text-white"
              class="w-full"
            ></q-select>
          </div>
          <div
            v-if="dform.cluster"
            class="w-full px-3 flex flex-col justify-center gap-2 items-start"
          >
            <p class="text-black text-md">Select Learning Track</p>

            <q-select
              :options="trackoption"
              v-model="dform.track"
              @update:model-value="(v) => updateTrack(v)"
              label="Select Institution Sector"
              standout="bg-orange text-white"
              class="w-full"
            ></q-select>
          </div>
        </div>
      </q-step>
      <q-step :name="2">
        <div
          class="w-full px-3 pb-10 flex flex-col justify-center gap-4 items-start"
        >
          <p class="text-black text-lg font-bold">Personal Information</p>

          <div class="relative mx-auto">
            <img
              @click="InitUpload"
              class="w-28 h-28 rounded-full border-4 border-solid border-orange-400 shadow-md overflow-hidden"
              :src="img"
              alt=""
            />
            <v-file-input
              v-show="false"
              @change="CreateImageObj"
              v-model="fileInputImage"
              id="fileUpload"
              class=""
            >
            </v-file-input>
            <div class="absolute bottom-0 right-0">
              <q-btn @click="InitUpload" size="10px" class="bg-orange" round
                ><img class="z-10" src="@/assets/img/edit.png" alt=""
              /></q-btn>
            </div>
          </div>

          <q-input
            v-model="dform.fullName"
            label="Full Name"
            standout="bg-orange text-white"
            class="w-full"
          ></q-input>
          <q-input
            v-model.trim="dform.email"
            label="Email"
            type="email"
            standout="bg-orange text-white"
            class="w-full"
          ></q-input>
          <q-select
            :options="['Male', 'Female']"
            v-model="dform.gender"
            emit-value
            label="Your Gender"
            standout="bg-orange text-white"
            class="w-full"
          ></q-select>
          <q-input
            v-model="dform.phone"
            label="Phone Number"
            standout="bg-orange text-white"
            class="w-full"
          ></q-input>
        </div>
      </q-step>
      <q-step :name="3">
        <div
          class="w-full px-3 pb-10 flex flex-col justify-center gap-4 items-start"
        >
          <p class="text-black text-center text-lg font-bold">
            Additional Information
          </p>

          <q-select
            :options="['Yes', 'No']"
            v-model="dform.havePc"
            emit-value
            label="Do you have a personal computer"
            standout="bg-orange text-white"
            class="w-full"
          ></q-select>

          <q-select
            :options="[
              'Ado Ekiti',
              'Iworoko Ekiti',
              'Other Region Within Ekiti State',
              'Not within Ekiti State',
            ]"
            v-model="dform.residence"
            emit-value
            label="Where do you reside"
            standout="bg-orange text-white"
            class="w-full"
          ></q-select>
          <q-select
            :options="['Morning(9Am- 11AM)', 'Afternoon(2pm - 5pm)']"
            v-model="dform.session"
            emit-value
            label="Whats Your Preferred Learning Session"
            standout="bg-orange text-white"
            class="w-full"
          ></q-select>
          <q-select
            :options="['Beginner', 'Novice', 'Expert', 'Professional']"
            v-model="dform.experience"
            emit-value
            label="Whats your level of experience in selected learning track "
            standout="bg-orange text-white"
            class="w-full"
          ></q-select>
          <div class="w-full">
            <label for="" class="block text-sm font-medium text-gray-600">
              Tell us why you would love to enroll for this track?
            </label>
            <div class="relative mt-2">
              <div
                class="absolute top-0 left-0 flex items-center pt-4 pl-4 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>

              <textarea
                name=""
                id=""
                placeholder="Why would you love to enroll for this track"
                v-model="dform.why"
                rows="3"
                class="border block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
              ></textarea>
            </div>
          </div>
        </div>
      </q-step>
      <q-step :name="4">
        <div
          class="w-full px-3 h-[70vh] flex flex-col justify-center gap-4 items-center"
        >
          <lord-icon
            src="https://cdn.lordicon.com/hmzvkifi.json"
            trigger="loop"
            delay="2000"
            colors="primary:#6c16c7"
            style="width: 50px; height: 50px"
          >
          </lord-icon>
          <p class="text-black text-center text-lg font-bold">
            Hello, {{ dform.fullName }}! You have successfully enrolled for the
            {{ dform.cluster }} - {{ dform.track }} learning path.
          </p>
          <p class="text-center italic">
            Sit back and relax while we set up your student dashboard. We’ll
            reach out with further information and updates.
          </p>

          <q-btn color="orange" @click="$router.go({ path: '/' })"
            >Go Home</q-btn
          >
        </div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation
          v-if="step < 4"
          class="w-full flex justify-between"
        >
          <q-btn
            v-if="step > 1"
            flat
            color="orange"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
          <q-btn
            v-if="step < 3"
            :disable="!isValid"
            @click="$refs.stepper.next()"
            color="orange"
            label="Continue"
          />
          <q-btn
            v-else
            :loading="loading"
            :disable="!isValid"
            @click="SubmitForm"
            color="orange"
            label="Submit"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
  <q-dialog
    transition-show="slide-up"
    transition-hide="slide-down"
    v-model="dialog"
  >
    <div class="w-full bg-white h-[500px] fixed bottom-0 px-3 rounded-t-xl">
      <div class="bg-[#E5E6EB] w-20 h-3 mx-auto mt-3 mb-6 rounded-full"></div>
      <p class="text-center text-lg font-bold text-[#333]">
        Select {{ title }}
      </p>

      <div
        class="mb-5 text-center py-4 rounded-full text-[#8F9BB3] text-2xl border-b border-b-[#407BFF]"
      ></div>
      <div class="w-full grid gap-2 py-4 grid-cols-2 place-items-center">
        <div
          @click="selectItem(item.value)"
          class="w-full relative flex justify-center items-center border-2 p-2 border-solid rounded-md h-[100px]"
          :class="{ 'border-orange-300': dform[selectedOp] == item.value }"
          v-for="(item, index) in options"
          :key="index"
        >
          <input
            @click="selectItem(item.value)"
            :class="{ 'bg-orange-300': dform[selectedOp] == item.value }"
            :checked="dform[selectedOp] == item.value"
            class="absolute top-2 left-2"
            type="radio"
          />
          <p class="font-bold text-center">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<script>
let nuxt;
let store;
let axios;
export default {
  props: ["clus"],
  data: () => ({
    clusterImg: "",
    trackImg: "",
    clusr: "",
    step: 1,
    dialog: false,
    loading: false,
    title: "",
    img: "https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-2.png",
    dform: {
      cluster: "",
      state: "",
      uniType: "",
      school: "",
      level: "",
      fullName: "",
      email: "",
      matricNo: "",
      faculty: "",
      department: "",
    },
    options: [],
    selectedOp: "",
    states: [
      "Abia",
      "Adamawa",
      "Akwa Ibom",
      "Anambra",
      "Bauchi",
      "Bayelsa",
      "Benue",
      "Borno",
      "Cross River",
      "Delta",
      "Ebonyi",
      "Edo",
      "Ekiti",
      "Enugu",
      "FCT - Abuja",
      "Gombe",
      "Imo",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Kwara",
      "Lagos",
      "Nasarawa",
      "Niger",
      "Ogun",
      "Ondo",
      "Osun",
      "Oyo",
      "Plateau",
      "Rivers",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara",
    ],
    uniType: [
      "State University",
      "Federal University",
      "Private University",
      "Polytechnic",
      "College Of Education",
    ],
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
    trackoption: [],
  }),
  computed: {
    uni() {
      return store.uni;
    },
    isValid() {
      if (this.step == 1 && this.dform.cluster && this.dform.track) {
        return true;
      }

      if (
        this.step == 2 &&
        this.dform.fullName &&
        this.dform.email &&
        this.dform.gender &&
        this.dform.phone
      ) {
        return true;
      }
      if (
        this.step == 3 &&
        this.dform.havePc &&
        this.dform.residence &&
        this.dform.experience &&
        this.dform.why
      ) {
        return true;
      }
      return false;
    },
  },
  created() {
    nuxt = useNuxtApp();
    store = useAdminStore();
    axios = nuxt.$UseAxios;

    if (this.clus != null) {
      let mcluster =
        this.clusters.find(
          (m) => m.title.toLowerCase() == this.clus?.toLowerCase()
        ) || {};
      this.clusr = mcluster.title;
      this.dform.cluster = mcluster.title;
      this.trackoption = mcluster.tracks;
      this.clusterImg = mcluster.img;
    }
  },
  methods: {
    updateCluster(v) {
      this.dform.cluster = v.label;
      this.trackoption = v.tracks;
      this.clusterImg = v.img;
      console.log(this.clusterImg);
      console.log(v);
      console.log(this.dform);
    },
    updateTrack(v) {
      this.dform.track = v;
      let temp =
        this.tracks.find((m) => m.name.toLowerCase() == v.toLowerCase()) || {};
      this.trackImg = temp.img || null;
      console.log(temp);
    },
    async CreateImageObj() {
      try {
        if (this.fileInputImage) {
          this.img = URL.createObjectURL(this.fileInputImage[0]);
        }
      } catch (err) {
        console.log(err);
      }
    },
    InitUpload() {
      document.getElementById("fileUpload").click();
    },
    SelectState() {},
    selectItem(value) {
      if (this.selectedOp == "state") {
        this.dform[this.selectedOp] = value;
      }
      if (this.selectedOp == "uniType") {
        this.dform[this.selectedOp] = value;
      }
      if (this.selectedOp == "school") {
        this.dform[this.selectedOp] = value;
      }
      this.dialog = false;
    },
    selectOptions(option) {
      this.options = [];
      this.selectedOp = option;
      if (this.selectedOp == "state") {
        this.title = "State";
        this.options = this.states.map((v) => ({
          name: v,
          value: v,
          label: v,
        }));
      }

      if (this.selectedOp == "uniType") {
        this.title = "Insitution Type";
        this.options = this.uniType.map((v) => ({
          name: v,
          value: v,
          label: v,
        }));
      }
      if (this.selectedOp == "uniType") {
        this.title = "Insitution Type";
        this.options = this.uniType.map((v) => ({
          name: v,
          value: v,
          label: v,
        }));
      }

      if (this.selectedOp == "school") {
        this.title = "Insitution";
        let temp = this.uni[this.dform.state] || [];
        this.options = temp.map((v) => ({
          name: v,
          value: v,
          label: v,
        }));
      }

      this.dialog = true;
    },
    async SubmitForm() {
      try {
        this.loading = true;
        let imgData = {};
        let UploadImg = nuxt.$UploadImg;
        if (this.fileInputImage) {
          imgData = await UploadImg(this.fileInputImage[0]);
        }
        if (imgData.url || this.img) {
          this.dform.img = imgData.url ? imgData.url : this.img;
        }
        let userCred = TokenGetter();
        console.log(userCred);
        const res = await axios.post(`api/user/auth/register`, this.dform);
        let data = res.data;
        console.log(data);
        if (data.status) {
          ShowSnack("You Have Successfully Joined The Wait List", "positive");
          this.loading = false;
          this.step = 4;
        } else {
          throw data;
        }
      } catch (err) {
        this.loading = false;
        let response = err.response;
        let data = response.data;
        console.log(err);
        ShowSnack(
          `Error, ${data.message ? data.message : "Error Joining Wait List"}`,
          "negative"
        );
      }
    },
  },
};
</script>

<style>
</style>