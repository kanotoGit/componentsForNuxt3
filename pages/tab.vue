<script lang="ts" setup>
import { TabItem } from '@/components/ui/TabContents/TabContents.vue';
import { pages } from '@/utils';

definePageMeta({
  isRequireAuth: false,
  middleware: [
    to => {
      // タブの初期ページを設定
      if(to.path === pages.tab) {
        return navigateTo({
          path: pages.sample,
          replace: true
        })
      }
    }
  ]
})

const tabList = ref<TabItem[]>([
  { id: Symbol(), url: pages.sample, label: 'サンプル', disabled: false },
  { id: Symbol(), url: pages.formSample, label: 'フォームサンプル', disabled: false },
])
</script>

<template>
  <div>
    <TabContents :tab-item-list="tabList" style="margin-top: 30px;" />
  </div>
</template>

<style lang="scss" scoped></style>