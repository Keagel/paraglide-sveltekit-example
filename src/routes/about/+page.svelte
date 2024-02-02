<script>
	import * as m from "$paraglide/messages.js";
	export let data;
</script>

<svelte:head>
  <title>{m.about()}</title>
  <meta name="description" content={m.about_this_app()} />
</svelte:head>

<svelte:component this={data.content} />
