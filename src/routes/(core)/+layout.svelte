<script>
	import Header from '$lib/components/Header.svelte';
	import '../../app.css';
</script>

<svelte:head>
	<title>K.W</title>
</svelte:head>

<div class="font-serif layout">
	<Header />
	<main>
		<slot />
	</main>

	<footer>Some stuff down here</footer>
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100%;
	}
</style>
