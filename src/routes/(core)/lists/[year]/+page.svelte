<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Year: {data.year}</h1>

{#if data.relatedLists.length > 0}
	<div class="related-lists">
		{#each data.relatedLists as list}
			<a href={list.url} class:active={data.year === list.title}>{list.title}</a>
		{/each}
	</div>
{/if}

{#each data.lists as list}
	<h3 class="font-black">Best {list.category}</h3>
{/each}

<style lang="scss">
	.related-lists {
		display: flex;
		gap: 1rem;
	}

	.active {
		font-weight: bold;
	}
</style>
