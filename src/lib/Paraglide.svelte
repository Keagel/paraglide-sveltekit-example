<script>
  import { page } from "$app/stores";
  import {
    setLanguageTag,
    sourceLanguageTag,
    isAvailableLanguageTag
  } from "$paraglide/runtime";

  //Use the default language if no language is given
  $: lang = isAvailableLanguageTag($page.params.lang) ? $page.params.lang : sourceLanguageTag;
  $: setLanguageTag(lang);
</script>

{#key lang}
  <slot />
{/key}
