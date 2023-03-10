import VueButton from './VueButton.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'VueButton',
  component: VueButton,
} as Meta<typeof VueButton>;

const Template: StoryFn<typeof VueButton> = (args) => ({
  components: { VueButton },
  setup() {
    return { args };
  },
  template: `<vue-button v-bind="args">サンプル</vue-button>`,
});

export const basic = Template