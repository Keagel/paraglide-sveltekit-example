import { createI18n } from "@inlang/paraglide-js-adapter-sveltekit";
import * as runtime from "$paraglide/runtime";
import * as m from "$paraglide/messages";

export const i18n = createI18n(runtime, {
  pathnames: {
    //You can use message-functions
    "/about": m.about_path,

    //Or a simple object
    "/sverdle": {
      en: "/sverdle",
      de: "/sverdle"
    }
  },

  textDirection: {
    en: "ltr",
    de: "ltr"
  }
});
