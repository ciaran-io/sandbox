import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: false,
  extends:['./src/app-1'],
  srcDir: 'src/',
  modules: ['@nuxtjs/tailwindcss','@nuxt/image-edge'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~~/.config/tailwind.config.js',
    injectPosition: 0,
    viewer: false,
  }
})
