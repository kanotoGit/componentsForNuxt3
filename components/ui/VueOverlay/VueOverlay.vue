<script lang="ts" setup>
import { defineProps, toRefs, ref } from 'vue'

const props = defineProps({
  /** オーバーレイの開閉状態 */
  open: {
    type: Boolean,
    required: true,
  },
  /** アニメーションの非アクティブ判定 */
  isDisabledAnimation: {
    type: Boolean,
    default: false,
  }
})
const { open, isDisabledAnimation } = toRefs(props)
const overlay = ref<HTMLDialogElement | null>(null)

/** emit */
const emit = defineEmits<{
  /** オーバーレイのクリックイベント */
  (event: 'clickOverlay'): void
  /** オーバーレイが開くイベント */
  (event: 'opened'): void
  /** オーバーレイが閉じるイベント */
  (event: 'closed'): void
}>()

/** 要素がDOMに挿入された後の処理 */
const onEnter = () => {
  if (overlay?.value) {
    if (open.value) {
      // 開く処理
      overlay.value.showModal()
    } else {
      // 閉じる処理
      overlay.value.close()
    }
  } else {
    console.error('オーバーレイを開けませんでした。')
  }
}
</script>

<template>
  <div data-component="VueOverlay">
    <Transition
      :name="isDisabledAnimation ? undefined : `animate`"
      appear
      @enter="onEnter"
      @afterEnter="emit('opened')"
      @afterLeave="emit('closed')"
    >
      <dialog
        v-if="open"
        ref="overlay"
        class="overlay"
        @click="emit('clickOverlay')"
      >
        <div class="inner"><slot /></div>
      </dialog>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
[data-component="VueOverlay"] {
  .overlay:modal {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    display: grid;
    place-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: none;
    background-color: var(--overlay-color);
  }
  .inner {
    max-width: 90%;
    max-height: 90%;
    overflow: auto;
  }

  /** アニメーション */
  .animate-enter-active,
  .animate-leave-active,
  .animate-enter-active .inner,
  .animate-leave-active .inner {
    transition: 300ms ease;
  }
  .animate-enter-from,
  .animate-leave-to {
    opacity: 0;
    .inner {
      opacity: 0;
      transform: scale(0.5);
    }
  }
}
</style>