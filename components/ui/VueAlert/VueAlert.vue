<script lang="ts" setup>
import { PropType } from 'vue';
import { defineProps, toRefs, computed } from 'vue'

import VueButton from '@/components/ui/VueButton/VueButton.vue'
import VueOverlay from '@/components/ui/VueOverlay/VueOverlay.vue'

import { ALERT_TYPE } from '@/utils';
import { AlertType } from '@/types/alert';

const props = defineProps({
  /** オーバーレイの開閉状態 */
  open: {
    type: Boolean,
    required: true,
  },
  /** 表示テキスト */
  text: {
    type: String as PropType<string | null>,
    default: null,
  },
  /** 表示コンポーネント */
  component: {
    type: Object as PropType<object | null>,
    default: null,
  },
  /** アラートの種類 */
  type: {
    type: String as PropType<AlertType>,
    default: ALERT_TYPE.CONFIRM,
  }
})
const { open, text, type } = toRefs(props)

/** アラートの開閉状態 */
const isOpenAlert = computed({
  get(): boolean {
    return open.value
  },
  set(isOpen: boolean) {
    emit('update:open', isOpen)
  },
})

/** アラートの種類 */
const isConfirm = computed(() => type.value === ALERT_TYPE.CONFIRM)
const isNotice = computed(() => type.value === ALERT_TYPE.NOTICE)
const isError = computed(() => type.value === ALERT_TYPE.ERROR)

/** ポジティブボタンの色 */
const positiveButtonColor = computed(() => {
  if (isNotice.value) {
    return 'secandary'
  } else if (isError.value) {
    return 'error'
  } else {
    return 'primary'
  }
})

/** emit */
const emit = defineEmits<{
  /** アラートの開閉判定 更新 */
  (event: 'update:open', isOpen: Boolean): void
  /** ポジティブボタン 押下イベント */
  (event: 'clickPositive'): void
  /** ネガティブボタン 押下イベント */
  (event: 'clickNegative'): void
  /** アラート 開くイベント */
  (event: 'opened'): void
  /** アラート 閉じるイベント */
  (event: 'closed'): void
}>()

/** ポジティブボタン 押下イベント */
const clickPositive = () => {
  isOpenAlert.value = false
  emit('clickPositive')
}

/** ネガティブボタン 押下イベント */
const clickNegative = () => {
  isOpenAlert.value = false
  emit('clickNegative')
}
</script>

<template>
  <div data-component="VueAlert">
    <VueOverlay :open="isOpenAlert" @opened="emit('opened')" @closed="emit('closed')" >
      <div class="contents" :class="[ type ]">
        <div class="contents-text">
          <!-- テキスト表示 -->
          <p v-if="text" v-text="text" class="text"></p>
          <!-- TODO: コンポーネント表示 -->
        </div>
        <div class="contents-buttons">
          <VueButton v-if="isConfirm" color="negative-button-color" @click="clickNegative">キャンセル</VueButton>
          <VueButton :color="positiveButtonColor" @click="clickPositive">OK</VueButton>
        </div>
      </div>
    </VueOverlay>
  </div>
</template>

<style lang="scss" scoped>
[data-component="VueAlert"] {
  .contents {
    width: 400px;
    background-color: var(--modal-color);
    border-radius: 4px;
  }
  .contents-text {
    padding: var(--space-small);
  }
  .contents-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space-regular);
    padding: var(--space-small);
    border-top: 1px solid var(--separator-color);
  }
  .text {
    white-space: pre-line;
  }
}
</style>