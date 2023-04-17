<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
console.log(config.public.nuxtEnv)
</script>

<style lang="scss"></style>
