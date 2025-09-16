export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: { port: 3001 },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@compodium/nuxt',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],
});
