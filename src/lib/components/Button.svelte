<script lang="ts">
	import { clipboard as clipboardAction } from '$lib/actions/clipboard';
	import { fade } from 'svelte/transition';

	export let clipboard: string | undefined = undefined;
	export let variant: 'primary' | 'secondary' = 'primary';

	let showCopiedIndicator = false;

	function handleCopied() {
		showCopiedIndicator = true;
		setTimeout(() => {
			showCopiedIndicator = false;
		}, 1200);
	}

	$: clipboardParam = clipboard ? { text: clipboard } : undefined;
</script>

<button
	use:clipboardAction={clipboardParam}
	on:copied={handleCopied}
	on:click
	class="button button--{variant} inline-flex items-center justify-center text-lg px-3 py-1 rounded-md"
>
	{#if showCopiedIndicator}
		<div out:fade={{ delay: 300, duration: 300 }} in:fade={{ delay: 0, duration: 0 }}>&check;</div>
	{:else}
		<div out:fade={{ delay: 0, duration: 0 }} in:fade={{ delay: 300, duration: 300 }}>
			<slot />
		</div>
	{/if}
</button>

<style lang="scss">
	.button {
		min-height: 2.5rem;
	}

	.button--primary {
		background-color: black;
		color: white;
		border: 2px solid transparent;
	}

	.button--secondary {
		background-color: white;
		color: black;
		border: 2px solid lightgray;

		&:active {
			background-color: grey;
		}
	}
</style>
