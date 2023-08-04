<script lang="ts">
	import ReleaseDisplay from '$lib/components/ReleaseDisplay.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.release} - {data.artist}</title>
</svelte:head>

<div class="grid grid-cols-1 gap-6">
	<ReleaseDisplay
		artist={data.artist}
		release={data.release}
		links={data.links}
		releaseDate={data.releaseDate}
		tracks={data.tracks}
	/>

	<div class="col-span-full">
		<svelte:component this={data.content} />
	</div>
</div>

<style lang="scss">
</style>
