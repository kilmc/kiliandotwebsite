<script>
	import { major } from '@kilmc/music-fns';
	import Piano from './Piano.svelte';
</script>

<div class="max-w-md">
	{#each Object.entries(major).filter(([name]) => /Db|C#/.test(name)) as [name, scale]}
		<h3>{name}</h3>
		<Piano notes={scale.notes} />
	{/each}
</div>
