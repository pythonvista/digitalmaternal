<template>
  <div class="min-h-screen w-full pt-1 pb-20 px-2">
    <UtilsNoResult
      v-if="allBlogs.length == 0"
      :loader="loader"
      :title="`blogs`"
    ></UtilsNoResult>
    <q-infinite-scroll v-else @load="onLoad" class="h-full">
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner color="primary" name="dots" size="40px" />
        </div>
      </template>

      <div
        class="grid overflow-hidden max-w-md grid-cols-1 gap-5 mx-auto mt-5 xl:gap-6 lg:grid-cols-3 lg:max-w-none sm:mt-5"
      >
        <div
          v-for="(item, index) in allBlogs"
          :key="index"
          @click="OpenBlog(item)"
          class="p-6 transition-all cursor-pointer duration-200 bg-gray-800 rounded-2xl"
        >
          <a
            title=""
            class="block cursor-pointer overflow-hidden aspect-w-16 aspect-h-9 rounded-xl"
          >
            <img
              v-if="item.blog_old"
              class="object-cover w-full h-full transition-all duration-200 transform"
              :src="`https://aynigeria.vercel.app${item.img}`"
              alt=""
            />

            <img
              v-else
              class="object-cover w-full h-full transition-all duration-200 transform"
              :src="item.img"
              alt=""
            />
          </a>

          <div
            @click="OpenBlog(item)"
            class="flex items-center justify-between mt-6"
          >
            <p class="text-sm font-medium text-gray-300">
              <a href="#" title="" class=""> {{ item.title }} </a>
            </p>

            <p class="text-sm font-medium text-gray-400">
              {{ item.created_at?.split("T")[0] }}
            </p>
          </div>

          <hr class="my-5 border-gray-700" />

          <h3
            @click="OpenBlog(item)"
            class="text-lg font-semibold text-white xl:text-xl group-hover:text-gray-200"
          >
            <a title="" class="">
              {{ item.shortDesc == "No Desc" ? item.title : item.shortDesc }}
            </a>
          </h3>
        </div>
      </div>
    </q-infinite-scroll>
  </div>
</template>

<script>
let store;
let axios;
let nuxt;
export default {
  setup() {
    definePageMeta({
      layout: "home",
    });
  },
  data: () => ({
    blogs: [],
    loading: false,
    initCount: 0,
    loader: true,
  }),

  created() {
    store = useRechargeStore();
    nuxt = useNuxtApp();
    axios = nuxt.$UseAxios;
  },
  mounted() {
    this.GetBlogs();
  },
  computed: {
    userData() {
      let userData = store.userData || {};
      return userData;
    },

    allBlogs() {
      return this.blogs.filter((v) => v.category.toLowerCase() == "blogs");
    },
  },

  methods: {
    async GetBlogs() {
      try {
        let start = this.blogs.length == 0 ? 0 : this.blogs.length + 1;
        let end = (this.initCount += 10);
        let date = GetDate();
        let url = `/data/blogs?start=${start}&end=${end}&date=${""}`;
        let res = await axios.get(url);
        let data = res.data;
        console.log(data);
        if (data.status) {
          this.loader = false;
          let items = data.value;
          if (items.length > 0) {
            this.blogs.splice(0, 0, ...items);
            // ShowSnack("New Data ooo", "positive");
            this.initCount = end;
          }
        } else {
          throw {};
        }
      } catch (err) {
        console.log(err);
        ShowSnack("Error Fetching Blog", "negative");
      }
    },
    OpenBlog(item) {
      console.log(item);
      this.$router.push({
        path: `/blog/info`,
        query: { id: item.docid },
      });
    },
    async onLoad(index, done) {
      try {
        await this.GetBlogs();
        setTimeout(() => {
          done();
        }, 4000);
      } catch (err) {
        ShowSnack("Error Fetching Blog", "negative");
      }
    },
  },
};
</script>

<style scoped></style>
