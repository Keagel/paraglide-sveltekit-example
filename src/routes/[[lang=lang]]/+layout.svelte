<script>
	import Paraglide from '$lib/Paraglide.svelte';
	import Header from './Header.svelte';
	import * as m from "$paraglide/messages"
	import './styles.css';
</script>

<Paraglide>
<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>{@html m.footer_cta()}</p>
	</footer>
</div>
</Paraglide>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
