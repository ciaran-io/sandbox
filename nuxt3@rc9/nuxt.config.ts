import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: false,
  extends:['./app-1'],
  modules: ['@nuxtjs/tailwindcss','@nuxt/image-edge'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~~/.config/tailwind.config.js',
    injectPosition: 0,
    viewer: false,
  }
})
