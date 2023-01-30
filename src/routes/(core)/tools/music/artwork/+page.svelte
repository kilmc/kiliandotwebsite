<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import albumArt from 'album-art';

	let artwork: string;
	let artist: string;
	let release: string;

	async function handleClick() {
		artwork = await albumArt(artist, { album: release });
	}
</script>

<div class="layout-artwork">
	<form>
		<div class="flex flex-col">
			<Input label="Artist" id="artist" bind:value={artist} class="mb-2" />
			<Input label="Release" id="release" bind:value={release} class="mb-4" />
		</div>

		<Button on:click={handleClick}>Fetch</Button>
	</form>
	<div>
		{#if artwork}
			<img src={artwork} alt="Artwork" />
		{:else}
			<div>Search for Artwork</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.layout-artwork {
		display: grid;
		grid-template-columns: 20rem 1fr;
	}
</style>
