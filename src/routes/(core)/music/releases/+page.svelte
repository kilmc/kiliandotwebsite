<script lang="ts">
	import Vinyl from '$lib/components/Vinyl.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Music | Releases</title>
</svelte:head>

<div class="grid grid-cols-2 xs:grid-cols-3 gap-5 mb-12">
	{#each data.releaseItems as item}
		<a href={item.url}>
			<Vinyl class="shadow-md" artist={item.artist} release={item.release} />
		</a>
	{/each}
</div>
