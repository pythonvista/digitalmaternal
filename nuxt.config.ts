// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Innovate Skill-up',
      meta: [
        {
          name: 'description',
          content: 'Innovate Skill-up',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.lordicon.com/bhenfmcm.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
        {
          src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
          type: 'text/javascript',
          crossorigin: '',
          async: true,
        },
      ],
    },
  },
  runtimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    API_PASSWORD: process.env.API_PASSWORD,
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-quasar-ui',
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  quasar: {
    plugins: ['Notify', 'Dialog'],
  },
  plugins: [
    { src: '~/plugins/useVuetify.js', mode: 'client' },
    // { src: '~/plugins/usemysql.server.js' },
  ],

  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
});
