<script lang="ts">
	import { clipboard as clipboardAction } from '$lib/actions/clipboard';

	export let clipboard: string | undefined = undefined;
	export let variant: 'primary' | 'secondary' = 'primary';

	$: clipboardParam = clipboard ? { text: clipboard } : undefined;
</script>

<button
	use:clipboardAction={clipboardParam}
	on:click
	class="button button--{variant} h-10 inline-flex items-center justify-center text-lg px-3 py-1 rounded-md"
>
	<slot />
</button>

<style lang="scss">
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
