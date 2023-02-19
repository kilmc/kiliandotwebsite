<script lang="ts">
	import type { TabItem } from './types';

	export let items: TabItem[];
	let activeItem = 0;
</script>

<div>
	{#each items as item, i}
		<button
			class:font-bold={activeItem === i}
			class="pt-2 px-2 border border-b-0 rounded-sm"
			on:click={() => (activeItem = i)}
		>
			{item.label}
		</button>
	{/each}
</div>

<div>
	{#each items as item, i}
		{#if activeItem === i}
			<svelte:component this={item.component} />
		{/if}
	{/each}
</div>
