<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import { calculateRatio } from './calculateRatio';

	let width: string = '1920';
	let height: string = '1080';

	const flipValues = (prevWidth: string, prevHeight: string) => {
		width = prevHeight;
		height = prevWidth;
	};

	$: [widthValue, heightValue] = calculateRatio(Number(width), Number(height));
	$: horizontal = Number(width) > Number(height);
</script>

<div class="h-full">
	<h3>Calculate ratios</h3>

	<div class="layout h-full gap-4">
		<div class="flex items-start gap-2">
			<Input label="Width" bind:value={width} id="value-1" />
			<Input label="Height" bind:value={height} id="value-2" />
			<Button on:click={() => flipValues(width, height)}>Flip</Button>
		</div>
		<div class="flex">
			<div
				class="text-4xl bg-black text-white tracking-wider font-bold flex m-auto {horizontal
					? 'w-2/3'
					: 'h-2/3'}"
				style="aspect-ratio: {widthValue}/{heightValue}"
			>
				<span class="m-auto">{widthValue}:{heightValue}</span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
