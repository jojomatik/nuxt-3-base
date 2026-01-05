import { h, reactive } from "vue";
import StoryWrapper from "./StoryWrapper.vue";
import type { PartialStoryFn, StoryContext } from "storybook/internal/csf";

export const DEFAULT_LOCALE = "en";
export const DEFAULT_THEME = "light";

const state = reactive({
  locale: DEFAULT_LOCALE,
  theme: DEFAULT_THEME,
});

export default function themeLocaleDecorator(
  story: PartialStoryFn,
  context: StoryContext,
) {
  state.locale = context.globals.locale;
  state.theme = context.globals.theme;

  return () => {
    return h(
      StoryWrapper,
      {
        themeName: state.theme,
        locale: state.locale,
      },
      {
        story: () => h(story(), { ...context.args }),
      },
    );
  };
}
