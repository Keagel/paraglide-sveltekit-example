import { createI18n } from "@inlang/paraglide-js-adapter-sveltekit";
import * as runtime from "$paraglide/runtime";

export const i18n = createI18n(runtime, {
  pathnames: {
    "/about": {
      en: "/about",
      de: "/ueber",
    },
  },
  textDirection: {
    en: "ltr",
    de: "ltr"
  }
});
