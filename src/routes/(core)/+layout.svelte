<script>
	import Header from '$lib/components/Header.svelte';
	import '../../app.css';
	import { page } from '$app/stores';
</script>

<div
	class="layout grid dark:bg-black dark:text-white p-5 sm:p-10 lg:p-20 font-mono mx-auto max-w-6xl min-h-full gap-8"
>
	<Header path={$page.url.pathname} />
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.layout {
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: min-content 1fr;

		@screen sm {
			grid-template-columns: min-content 1fr;
			grid-template-rows: min-content 1fr;
		}
	}
</style>
