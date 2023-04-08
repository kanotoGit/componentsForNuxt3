import { Meta, StoryFn } from '@storybook/vue3'
import TextField from './TextField.vue'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    // controlタイプの変更
    text: {
      control: {
        type: 'text'
      }
    },
  }
} as Meta<typeof TextField>

const Template: StoryFn<typeof TextField> = args => ({
  components: { TextField },
  setup () {
    return { args }
  },
  template: '<TextField v-bind="args" />',
})

export const basic = Template
