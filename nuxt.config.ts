// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      ADMIN_API_KEY: process.env.ADMIN_API_KEY,
      apiBase: process.env.API_BASE_URL,
    },
  },
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  imports: {
    dirs: [
      "composables",
      "composables/*/index.{ts,js,mjs,mts}",
      "composables/**",
    ],
  },
});
