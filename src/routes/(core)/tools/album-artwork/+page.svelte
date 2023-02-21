<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import SubNavPortal from '$lib/portals/SubNavPortal.svelte';
	import albumArt from 'album-art';

	let artwork: string;
	let artist: string;
	let release: string;

	async function handleClick() {
		artwork = await albumArt(artist, { album: release });
	}
</script>

<SubNavPortal>
	<form class="mt-10">
		<div class="flex flex-col">
			<Input label="Artist" id="artist" bind:value={artist} class="mb-2" />
			<Input label="Release" id="release" bind:value={release} class="mb-4" />
		</div>

		<Button on:click={handleClick}>Fetch</Button>
	</form>
</SubNavPortal>

<div class="max-h-screen w-3/4">
	{#if artwork}
		<img src={artwork} alt="Artwork" />
	{:else}
		<div>Search for Artwork</div>
	{/if}
</div>
