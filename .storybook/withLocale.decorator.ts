import { h } from "vue";
// import { useI18n } from "vue-i18n";

export const DEFAULT_LOCALE = "en";

export const withLocale = (
  storyFn: () => any,
  context: { globals: { theme: string }; args: {} },
) => {
  console.log(context);
  const locale = context.globals.locale || DEFAULT_LOCALE;

  // useI18n().locale = locale;
  const story = storyFn();

  return () => {
    return h(story, { ...context.args });
  };
};
