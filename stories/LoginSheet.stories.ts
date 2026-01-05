import type { Meta, StoryObj } from "@nuxtjs/storybook";
import LoginSheet from "~/components/ui/LoginSheet.vue";

const meta: Meta<typeof LoginSheet> = {
  title: "Components/LoginSheet",
  component: LoginSheet,
  args: {},
  argTypes: {
    onLogin: {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
