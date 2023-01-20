<script lang="ts">
	import { palettes, type Palette } from '$lib/stores/palettes';
	import ColorGradations from './ColorGradations.svelte';

	let localPalettes: Palette[] = [];
	palettes.subscribe((data) => {
		localPalettes = data;
	});
</script>

<div class="w-full">
	{#if localPalettes.length > 0}
		{#each localPalettes as { hexValue, name }}
			<ColorGradations {hexValue} {name} />
		{/each}
	{/if}
</div>
<button
	on:click={() => palettes.update((value) => value.concat({ hexValue: '#111111', name: 'grey' }))}
>
	Add new one
</button>
