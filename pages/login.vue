<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

/* メタ定義 **/
definePageMeta({
  layout: 'simple',
  isRequireAuth: false
})

/** ログインボタンのアクティブ状態 */
const isDisabledLoginButton = ref<boolean>(false)

/** ログイン情報 */
const id = ref<string>('')
const password = ref<string>('')

/** ログイン処理 */
const authStore = useAuthStore()
const { login, changeBeforeRedirectRoute } = authStore
const { getBeforeRedirectRoute } = storeToRefs(authStore)

/** ログインボタン 押下イベント */
const clickLogin = async () => {
  isDisabledLoginButton.value = true
  const result = await login(id.value, password.value)
  if (result) {
    // ログイン成功
    if (getBeforeRedirectRoute.value) {
      // リダイレクト先がある場合はそちらに遷移
      const { path, params, query, hash } = getBeforeRedirectRoute.value
      navigateTo({ path, params, query, hash, replace: true })
    } else {
      // リダイレクト先がない場合はトップに遷移
      navigateTo({ path: '/', replace: true })
    }
    changeBeforeRedirectRoute(null)
  } else {
    isDisabledLoginButton.value = false
  }
}
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
          <VueButton type="submit" :disabled="isDisabledLoginButton" @click="clickLogin()">
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
