import axios from 'axios'

export default defineNuxtPlugin(async (nuxtApp) => {
    const url = `https://maternalapi.vercel.app/api`
    const UseAxios = axios.create({
        baseURL: url,
        // responseType: 'json',
        // responseType: 'json',
    });

    nuxtApp.vueApp.provide('UseAxios', UseAxios);
    nuxtApp.provide('UseAxios', UseAxios);
})