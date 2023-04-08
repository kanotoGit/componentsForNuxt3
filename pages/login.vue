<script lang="ts" setup>
import { ref } from 'vue'

const id = ref<number | null>(null)
const password = ref<number | null>(null)

// メタ定義
definePageMeta({
  layout: 'simple',
})
</script>

<template>
  <section class="login">
    <dl class="inner">
      <dt>ID:</dt>
      <dd><TextField type="text" v-model:value="id"></TextField></dd>
      <dt>パスワード:</dt>
      <dd><TextField type="password" v-model:value="password"></TextField></dd>
      <dt><!-- スペーサー --></dt>
      <dd><VueButton>ログイン</VueButton></dd>
    </dl>
  </section>
</template>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.inner {
  width: 500px;
  aspect-ratio: 3/2;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(3, max-content);
  gap: 20px 10px;
  align-items: center;
  place-content: center;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 8px #aaa;
}
</style>