<script lang="ts">
	import type { PageData } from './$types';

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

<ol class="list-decimal">
	{#each data.list.items as item}
		<li>{item.title} - {item.artist}</li>
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
</style>
