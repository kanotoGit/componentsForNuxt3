<script setup lang="ts">
import { defineEmits, defineProps, computed } from 'vue'

/** props */
const props = defineProps({
  // ボタンタイプ
  type: {
    type: String as PropType<'button' | 'submit'>,
    default: 'button'
  },
  // ボタンカラー
  color: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary'
  },
  // 非アクティブ判定
  isDisabled: {
    type: Boolean,
    default: false,
  },
})
const { type, isDisabled, color } = props

/** emit */
const emit = defineEmits<{
  (event: 'click'): void
}>()

/** ボタンの色指定 */
const buttonColorStyle = computed(() => {
  return { backgroundColor: `var(--${color})` }
})

/**
 * ボタン押下イベント
 */
function onClick() {
  if (!isDisabled) {
    emit('click')
  }
}
</script>

<template>
  <button
    :type="type"
    :disabled="isDisabled"
    class="vue-button"
    :style="{ ...buttonColorStyle }"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.vue-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  background: none;
  appearance: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
}
</style>