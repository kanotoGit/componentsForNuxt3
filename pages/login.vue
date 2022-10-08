<script setup lang="ts">
import { Ref, ref } from "vue"

definePageMeta({
  layout: 'simple-layout'
})

// user ID
const userId: Ref<string | null> = ref(null)
// password
const password: Ref<string | null> = ref(null)


</script>

<template>
  <div class="login">
    <div class="login-inner pa-4">
      <h2 class="text-center mb-4">login</h2>
      <div class="login-grid">
        <span class="text-right mr-2">user ID:</span>
        <base-input v-model:text="userId" />
        <span class="text-right mr-2">password:</span>
        <base-input v-model:text="password" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: grid;
  place-items: center;
}
.login-inner {
  width: 100%;
  max-width: 600px;
  border: 2px solid #eee;
}
.login-grid {
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 20px 10px;
}
</style>