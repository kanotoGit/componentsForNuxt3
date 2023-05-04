<template>
  <div>
    <dl class="error">
      <dt>ステータスコード: </dt>
      <dd>{{ error?.statusCode }}</dd>
      <dt>ステータスメッセージ: </dt>
      <dd>{{ error?.statusMessage }}</dd>
      <dt>メッセージ: </dt>
      <dd>{{ error?.message }}</dd>
    </dl>

    <button @click="handleError">
      トップに戻る
    </button>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, PropType } from 'vue'

const props = defineProps({
  error: {
    type: Object as PropType<any | null>,
    default: null
  }
})
const { error } = toRefs(props)
const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>
.error {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 10px 20px;
}
</style>
