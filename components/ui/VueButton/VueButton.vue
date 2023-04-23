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
    type: String as PropType<'primary' | 'secandary'>,
    default: 'primary'
  },
  // 非アクティブ判定
  disabled: {
    type: Boolean,
    default: false,
  },
})
const { type, disabled, color } = props

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
  if (!disabled) {
    emit('click')
  }
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="vue-button"
    :style="{ ...buttonColorStyle }"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.vue-button {
  min-height: var(--form-item-height);
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