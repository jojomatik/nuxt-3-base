import type { Meta, StoryObj } from "@storybook/vue3";
import MyButton from "./MyButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof MyButton> = {
  title: "Components/Button",
  component: MyButton,
  argTypes: {
    onClick: {},
    size: { control: "select", options: ["small", "default", "large"] },
    color: { control: "select", options: ["primary", "secondary"] },
  },
  args: { color: "primary" }, // default value
};

export default meta;

type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    color: "primary",
    text: "Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    text: "Button",
  },
};

export const Large: Story = {
  args: {
    text: "Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    text: "Button",
    size: "small",
  },
};
