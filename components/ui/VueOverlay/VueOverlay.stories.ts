import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'
import VueOverlay from './VueOverlay.vue'

export default {
  title: 'VueOverlay',
  component: VueOverlay
} as Meta<typeof VueOverlay>

const Template: StoryFn<typeof VueOverlay> = args => ({
  components: { VueOverlay },
  setup () {
    const open = ref<boolean>(false)
    return { args, open }
  },
  template: `
  <button @click="open = true">開く</button>
    <vue-overlay :open="open" v-bind="args">
      <div>
        <p>Vueオーバーレイ</p>
        <button @click="open = false">閉じる</button>
      </div>
    </vue-overlay>
  `
})

export const basic = Template
