<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
console.log(config.public.nuxtEnv);
</script>

<style lang="scss">
@use '@/assets/scss/styles.scss'
</style>