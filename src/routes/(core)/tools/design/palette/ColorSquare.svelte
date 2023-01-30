<script lang="ts">
	import { fade } from 'svelte/transition';
	import { clipboard } from '$lib/actions/clipboard';
	import type { HSLColor } from './color-utils';

	export let value: HSLColor;
	export let name: string;

	let showCopiedIndicator = false;

	function handleCopied() {
		showCopiedIndicator = true;
		setTimeout(() => {
			showCopiedIndicator = false;
		}, 900);
	}
	$: ({ h, s, l } = value);
	$: textColor = l >= 60 ? 'text-black' : 'text-white';
</script>

<div>
	<div
		use:clipboard={{ text: `hsl(${h},${s}%,${l}%)` }}
		on:copied={handleCopied}
		class="flex p-2 relative h-full"
		style={`background-color: hsl(${h},${s}%,${l}%);`}
	>
		<div class={`font-mono ${textColor}`}>
			{name}
			{#if showCopiedIndicator}
				<span transition:fade={{ duration: 300 }} class="m-auto {textColor}">*</span>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	input[type='range'] {
		width: 100% !important;
	}
</style>
