<script lang="ts">
	import { palettes } from '$lib/stores/palettes';
	import ColorGradations from './ColorGradations.svelte';
</script>

<div class="w-full flex flex-col gap-4">
	{#if $palettes.length > 0}
		{#each $palettes as { hexValue, name }}
			<ColorGradations {hexValue} {name} />
		{/each}
	{/if}
</div>
<button
	on:click={() => palettes.update((value) => value.concat({ hexValue: '#111111', name: 'grey' }))}
>
	Add new one
</button>
