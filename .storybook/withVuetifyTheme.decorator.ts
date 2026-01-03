import { h } from "vue";
import StoryWrapper from "./StoryWrapper.vue";

export const DEFAULT_THEME = "light";

export const withVuetifyTheme = (
  storyFn: () => never,
  context: { globals: { theme: string }; args: object },
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
