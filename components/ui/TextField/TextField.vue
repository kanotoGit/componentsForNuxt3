<script lang="ts" setup>
import { toRefs, useAttrs } from 'vue'
import { isNumber } from '@/utils/index';

/** 入力値リセット用 */
// const isShowInput = ref<boolean>(true)

/** props */
const props = defineProps({
  // 入力値
  text: {
    type: [String, Number] as PropType<string | number | null>,
    default: null,
  },
  // 入力タイプ
  type: {
    type: String,
    default: 'text',
  },
  // 非アクティブ判定
  disabled: {
    type: Boolean,
    default: false,
  },
  // 入力値のエラー判定
  isError: {
    type: Boolean,
    default: false,
  },
})
const { text, type, disabled } = toRefs(props)

/** $attrs */
const $attrs = useAttrs()

/** emit */
const emit = defineEmits<{
  (event: 'update:value', value: string | number | null): void
  (event: 'input', value: string | number | null, e: Event): void
  (event: 'change', value: string | number | null, e: Event): void
}>()

/** 入力イベント */
function onInput(event: Event) {
  if (!disabled.value) {
    const target = event.target as HTMLInputElement
    const { value } = target
    let reflectValue: any = value || null;

    // 数値のバリデーションチェック
    if (type.value === 'number') {
      if (value && validateNumber(value)) {
        reflectValue = Number(value)
      } else {
        reflectValue = null
        // TODO: エラーアラート
        console.error('入力値が不正です。', String(value))
      }
    }
    emit('update:value', reflectValue)
    emit('input', reflectValue, event)
  }
}

/** 変更イベント */
function onChange(event: Event) {
  if (!disabled.value) {
    const target = event.target as HTMLInputElement
    const { value } = target
    let reflectValue: any = value || null;

    // 数値のバリデーションチェック
    if (type.value === 'number') {
      if (value && validateNumber(value)) {
        reflectValue = Number(value)
      } else {
        reflectValue = null
        // TODO: エラーアラート
        console.error('入力値が不正です。', String(value))
      }
    }
    emit('change', reflectValue, event)
  }
}

/**
 * 数値のバリデーションチェック
 * @param {string | null} value バリデーション対象の値
 */
function validateNumber(value: string | null): boolean {
  const maxNumber = Number.MAX_SAFE_INTEGER
  const minNumber = Number.MIN_SAFE_INTEGER
  if (value) {
    if (isNumber(value)) {
      const number = Number(value)
      if (minNumber <= number && number <= maxNumber) {
        // `数値` and `範囲内の数値`の場合は正常
        return true
      }
    }
  } else {
    // `空文字` or `null`の場合は常に正常
    return true
  }
  return false
}
</script>

<template>
  <div data-component="TextField">
    <input
      :type="type"
      :value="text"
      :disabled="disabled"
      v-bind="$attrs"
      @input="onInput"
      @change="onChange"
    >
  </div>
</template>

<style lang="scss" scoped>
[data-component="TextField"] {
  width: 100%;
  display: inline-block;
}
input {
  width: 100%;
  min-height: var(--form-item-height);
}
</style>