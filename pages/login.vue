<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

/* メタ定義 **/
definePageMeta({
  layout: 'simple'
})

/** ログイン情報 */
const id = ref<string>('')
const password = ref<string>('')

/** ログイン処理 */
const { login } = useAuthStore()
</script>

<template>
  <section class="login">
    <form class="form" @submit.prevent>
      <dl class="inner">
        <dt>ID:</dt>
        <dd><TextField v-model:value="id" type="text" /></dd>
        <dt>パスワード:</dt>
        <dd><TextField v-model:value="password" type="password" /></dd>
        <dt><!-- スペーサー --></dt>
        <dd>
          <VueButton type="submit" @click="login(id, password)">
            ログイン
          </VueButton>
        </dd>
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
