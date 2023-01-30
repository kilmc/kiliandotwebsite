<script lang="ts">
	import Input from '$lib/components/Input.svelte';

	let value1: string = '1920';
	let value2: string = '1080';

	const intersection = <T>(arr1: T[], arr2: T[]) =>
		arr1.length > arr2.length
			? arr1.filter((x) => arr2.indexOf(x) !== -1)
			: arr2.filter((x) => arr1.indexOf(x) !== -1);

	const factors = (number: number) =>
		Array.from(Array(number), (_, i) => i).filter((i) => number % i === 0);

	const calculateRatio = (width: number, height: number) => {
		const gcf = Math.max.apply(null, intersection(factors(width), factors(height)));
		return [width / gcf, height / gcf];
	};

	$: [width, height] = calculateRatio(Number(value1), Number(value2));
</script>

<div class="p-10">
	<h3>Calculate ratios</h3>

	<div class="layout gap-4">
		<div class="flex gap-2">
			<Input label="Width" bind:value={value1} id="value-1" />
			<Input label="Height" bind:value={value2} id="value-2" />
		</div>

		<div
			class="text-4xl bg-black text-white font-sans tracking-wider font-bold flex"
			style="aspect-ratio: {width}/{height}"
		>
			<span class="m-auto">{width}:{height}</span>
		</div>
	</div>
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
