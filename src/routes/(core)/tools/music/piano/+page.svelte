<script>
	import { major } from '@kilmc/music-fns';
	import HighlightPiano from './HighlightPiano.svelte';
</script>

<div class="max-w-md">
	{#each Object.entries(major) as [name, scale]}
		<h3>{name}</h3>
		<div class="overflow-scroll">
			<HighlightPiano notes={scale.notes} />
		</div>
	{/each}
</div>
