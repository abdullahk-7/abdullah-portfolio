// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss','nuxt-icon','@nuxt/content'
  ],
  content: {
    // ... options
  },
  devtools: { enabled: true }
})