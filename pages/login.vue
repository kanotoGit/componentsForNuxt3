<script lang="ts" setup>
import { ref } from 'vue'

const id = ref<string | null>(null)
const password = ref<string | null>(null)
const { $api } = useNuxtApp()

/* メタ定義 **/
definePageMeta({
  layout: 'simple',
})

/** ログイン処理 */
async function login() {
  try {
    if (id.value && password.value) {
      const response = await $api.auth.registLogin({
        id: id.value,
        password: password.value
      })
      // TODO: 成功時、piniaにデータ格納
      console.log(response)
    } else {
      // TODO: エラー処理
    }
  } catch (error) {
    // NOTE: 共通エラーを出力するため処理無し
  }
}
</script>

<template>
  <section class="login">
    <form class="form" @submit.prevent>
      <dl class="inner">
        <dt>ID:</dt>
        <dd><TextField type="text" v-model:value="id"></TextField></dd>
        <dt>パスワード:</dt>
        <dd><TextField type="password" v-model:value="password"></TextField></dd>
        <dt><!-- スペーサー --></dt>
        <dd><VueButton type="submit" @click="login">ログイン</VueButton></dd>
      </dl>
    </form>
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