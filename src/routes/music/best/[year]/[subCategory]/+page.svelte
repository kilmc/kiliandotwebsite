<script lang="ts">
	import type { PageData } from './$types';
	import MusicItem from './MusicItem.svelte';

	export let data: PageData;
</script>

<h2>{data.title}</h2>

{#if data.relatedLists.length > 0}
	<div class="related-lists">
		{#each data.relatedLists as list}
			<a href={list.url} class:active={data.list.year === list.title}>{list.title}</a>
		{/each}
	</div>
{/if}

<ol class="layout--grid">
	{#each data.list.items as item}
		<MusicItem
			{item}
			releaseType={data.list.subCategory}
			showArtwork={data.list.subCategory === 'albums'}
		/>
	{/each}
</ol>

<style lang="scss">
	.related-lists {
		display: flex;
		gap: 1rem;
	}

	.active {
		font-weight: bold;
	}

	.layout--grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
		gap: 1rem;
	}
</style>
