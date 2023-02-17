<script>
	import Header from '$lib/components/Header.svelte';
	import '../../app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>K.W</title>
</svelte:head>

<div class="layout p-20 font-mono">
	<Header path={$page.url.pathname} />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 2rem;
		min-height: 100%;
	}
</style>
