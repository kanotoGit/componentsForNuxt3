// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 共通SCSS
  css: ['@/assets/scss/styles.scss'],

  // 環境変数
  runtimeConfig: {
    public: {
      nuxtEnv: process.env.NUXT_ENV,
      apiUrl: process.env.NUXT_API_URL
    }
  }
})
