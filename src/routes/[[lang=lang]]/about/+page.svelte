<script>
	import en from "./en.svelte";
	import de from "./de.svelte";
	import * as m from "$paraglide/messages.js";
  	import { languageTag } from "$paraglide/runtime";

	const lang = {
		en,
		de,
	};
</script>

<svelte:head>
  <title>{m.about()}</title>
  <meta name="description" content={m.about_this_app()} />
</svelte:head>

<svelte:component this={lang[languageTag()]} />
