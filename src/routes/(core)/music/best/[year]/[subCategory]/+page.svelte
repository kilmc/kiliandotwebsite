<script lang="ts">
	import type { PageData } from './$types';
	import MusicItem from './MusicItem.svelte';

	export let data: PageData;
</script>

<div class="relative main-layout ml-10 overflow-scroll h-screen">
	<div class="relative left-10 mt-10">
		{#if data.relatedLists.length > 0}
			<div class="flex flex-col gap-2">
				{#each data.relatedLists as list}
					<a
						href={list.url}
						class="bg-blue-200 py-1 pl-2 pr-10 text-2xl"
						class:active={data.list.year === list.title}
					>
						{list.title}
					</a>
				{/each}
			</div>
		{/if}
	</div>

	<div class="bg-black py-4 pl-4">
		<div class="bg-cream-100 p-10 relative z-10">
			<h2 class="font-sans font-bold text-4xl mb-10">{data.title}</h2>
			<ol class="layout--grid">
				{#each data.list.items as item}
					<MusicItem
						{item}
						releaseType={data.list.subCategory}
						showArtwork={data.list.subCategory === 'albums'}
					/>
				{/each}
			</ol>
		</div>
	</div>
</div>

<style lang="scss">
	.active {
		font-weight: bold;
		background-color: black;
		color: white;
		z-index: 20;
	}

	.layout--grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
		gap: 3rem;
	}

	.main-layout {
		display: grid;
		grid-template-columns: min-content 1fr;
	}
</style>
