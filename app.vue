<template>
  <div />
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
console.log(config.public.nuxtEnv)

const { $api } = useNuxtApp()
const response = await $api.login.registLogin({
  id: 'yamada',
  password: 'bbbb'
})
console.log('login response', response)
</script>

<style lang="scss"></style>
