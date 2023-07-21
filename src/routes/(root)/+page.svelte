<script>
	import ItemStack from '$lib/components/ItemStack.svelte';
	import NotebookPage from '$lib/components/NotebookPage.svelte';
</script>

<div class="layout p-10 lg:p-20 font-mono">
	<aside>
		<div class="font-bold uppercase flex flex-col text-blue-600 logo mb-8">
			<div>Kilian</div>
			<div>Dot</div>
			<div>Website</div>
		</div>
		<p class="text-lg">
			Welcome to my little place on the internet. Have a look around. I hope you find something fun,
			useful or informative during your stay.
		</p>
	</aside>
	<main class="homepage-main">
		<div>
			<ItemStack href="/lists">
				<NotebookPage slot="top">Lists</NotebookPage>
				<NotebookPage slot="middle" />
				<NotebookPage slot="bottom" />
			</ItemStack>
		</div>
		<div class="col-span-2"><a href="/projects/">Projects</a></div>
		<div class="col-span-2"><a href="/tools/">Tools</a></div>
		<div><a href="/components/">Component Playground</a></div>
	</main>
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;

		@media (min-width: 1024px) {
			grid-template-columns: 1fr 3fr;
			gap: 10rem;
		}
	}

	.logo {
		font-size: 4rem;
		line-height: 0.8;

		@media (min-width: 640px) {
			font-size: 6rem;
		}
	}

	.homepage-main {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5px;
		border-width: 5px;
		// @apply bg-blue-600;
		// @apply border-blue-600;

		div {
			background-color: #fff;
			display: flex;
			padding: 3rem;

			:global(a) {
				margin: auto;
			}
		}
	}
</style>
