import { h } from "vue";
import StoryWrapper from "./StoryWrapper.vue";

export const DEFAULT_THEME = "light";

export const withVuetifyTheme = (
  storyFn: () => any,
  context: { globals: { theme: string }; args: {} },
) => {
  const globalTheme = context.globals.theme || DEFAULT_THEME;
  const story = storyFn();

  return () => {
    return h(
      StoryWrapper,
      { themeName: globalTheme },
      {
        story: () => h(story, { ...context.args }),
      },
    );
  };
};
