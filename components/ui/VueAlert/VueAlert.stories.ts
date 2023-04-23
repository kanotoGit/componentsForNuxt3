import { Meta } from '@storybook/vue3'
import { ref } from 'vue'
import VueAlert from './VueAlert.vue'

export default {
  title: 'VueAlert',
  component: VueAlert,
  argTypes: {
    text: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<typeof VueAlert>

export const text = (args: typeof VueAlert) => ({
  components: { VueAlert },
  setup () {
    const open = ref<boolean>(false)
    return { args, open }
  },
  template: `
  <button @click="open = true">開く</button>
  <vue-alert v-model:open="open" v-bind="args"></vue-alert>
  `
})