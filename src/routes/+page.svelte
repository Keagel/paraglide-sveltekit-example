<script>
	import * as m from "$paraglide/messages"
</script>

<svelte:head>
	<title>{m.home()}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		{m.welcome_to_paraglide_and_sveltekit_demo()}
	</h1>

	<h2>
		{@html m.try_editing_the_message_files()}
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
