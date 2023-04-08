import { Meta, StoryFn } from '@storybook/vue3'
import GlobalHeader from './GlobalHeader.vue'

export default {
  title: 'GlobalHeader',
  component: GlobalHeader
} as Meta<typeof GlobalHeader>

const Template: StoryFn<typeof GlobalHeader> = args => ({
  components: { GlobalHeader },
  setup () {
    return { args }
  },
  template: '<GlobalHeader v-bind="args">ヘッダー</GlobalHeader>'
})

export const basic = Template
