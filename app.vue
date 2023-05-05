<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import _ from 'lodash'
import { useAlertStore } from '@/stores/alert'
import { AlertInfo } from '@/types/alert'
import { MESSAGE_ERROR } from '@/utils'

onMounted(() => {
  /** エラーハンドリング */
  window.addEventListener('error', () => {
    console.log('error')
    showError(MESSAGE_ERROR)
  })
  window.addEventListener('unhandledrejection', () => {
    console.log('unhandledrejection')
    showError(MESSAGE_ERROR)
  })
})

// 環境変数 表示のみ
const config = useRuntimeConfig()
console.log(config.public.nuxtEnv)

const alertStore = useAlertStore()
const { getAlertList } = storeToRefs(alertStore)
const alertList = ref<AlertInfo[]>([])

watch(getAlertList, (list: AlertInfo[]) => {
  alertList.value = _.cloneDeep(list)
}, {
  deep: true
})

/**
 * アラートのボタン 押下イベント
 * @param isOk ポジティブボタン押下判定
 * @param alertInfo アラート情報
 */
const clickAlertButton = (isOk: boolean, alertInfo: AlertInfo) => {
  alertInfo.clickFunction(isOk)
}

/**
 * アラート 閉じるイベント
 * @param alertInfo アラート情報
 */
const closeAlert = (alertInfo: AlertInfo) => {
  alertInfo.closeFunction(alertInfo.id)
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- アラート -->
    <template v-for="alert in alertList" :key="alert.id">
      <VueAlert
        v-model:open="alert.open"
        :text="alert.text"
        :type="alert.alertType"
        @click-positive="clickAlertButton(true, alert)"
        @click-negative="clickAlertButton(false, alert)"
        @closed="closeAlert(alert)"
      />
    </template>
  </div>
</template>

<style lang="scss"></style>
