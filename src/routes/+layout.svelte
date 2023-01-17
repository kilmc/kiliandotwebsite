<script>
	import Header from '$lib/components/header.svelte';
	import '../app.css';
</script>

<div class="font-kepler kdw-bg-white layout">
	<Header />
	<main class="px-10">
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
