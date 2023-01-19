<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import { hexToHSL, type HSLColor } from './color-utils';
	import ColorSquare from './ColorSquare.svelte';

	type Color = {
		name: string;
		graduation: number;
		value: HSLColor;
	};

	let hex: string = '#000000';
	let name: string = 'grey';

	function getColorGrads({ h, s, l }: HSLColor, name: string): Color[] {
		const onesNumber = l % 10;
		return [900, 800, 700, 600, 500, 400, 300, 200, 100].map((graduation, i) => ({
			name,
			graduation,
			value: { h, s, l: (i + 1) * 10 + onesNumber }
		}));
	}

	function generateTailwindConfig(name: string, colors: Color[]) {
		const entries = colors
			.map((color) => {
				const { h, s, l } = color.value;
				return `  ${color.graduation}: 'hsl(${h},${s}%,${l}%)',`;
			})
			.join('\n');
		return `'${name}': { 
${entries}
}`;
	}

	function generateSassConfig(name: string, colors: Color[]) {
		return colors
			.map((color) => {
				const { h, s, l } = color.value;
				return `$${name}-${color.graduation}: hsl(${h},${s}%,${l}%);`;
			})
			.join('\n');
	}

	function generateCSSConfig(name: string, colors: Color[]) {
		return colors
			.map((color) => {
				const { h, s, l } = color.value;
				return `--${name}-${color.graduation}: hsl(${h},${s}%,${l}%);`;
			})
			.join('\n');
	}

	$: hslColor = hexToHSL(hex);
	$: colors = getColorGrads(hslColor, name);
	$: twConfig = generateTailwindConfig(name, colors);
	$: sassConfig = generateSassConfig(name, colors);
	$: cssConfig = generateCSSConfig(name, colors);
</script>

<div class=" bg-white p-4 shadow-md layout gap-4">
	<div class="flex flex-col justify-between">
		<Input label="Source color (hex)" id="color-input" bind:value={hex} class="mb-2" />
		<Input label="Name" id="color-input" bind:value={name} class="mb-4" />
		<div class="flex justify-between">
			<Button variant="secondary" clipboard={twConfig}>
				<div class="tailwind-logo"><span class="sr-only">Tailwind Logo</span></div>
			</Button>
			<Button variant="secondary" clipboard={sassConfig}>
				<div class="sass-logo"><span class="sr-only">Sass Logo</span></div>
			</Button>
			<Button variant="secondary" clipboard={cssConfig}>
				<div class="css-logo"><div class="m-auto">css</div></div>
			</Button>
		</div>
	</div>

	<div class="color-square-layout">
		{#each colors as { value, name, graduation }}
			<ColorSquare {value} name="{name}-{graduation}" />
		{/each}
	</div>
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: 10rem 1fr;
	}
	.color-square-layout {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
	}

	.tailwind-logo {
		width: 1rem;
		height: 1rem;
		background-color: currentColor;
		-webkit-mask: url('/images/vector/tailwind.svg') no-repeat center;
		mask: url('/images/vector/tailwind.svg') no-repeat center;
	}

	.sass-logo {
		width: 1rem;
		height: 1rem;
		background-color: currentColor;
		-webkit-mask: url('/images/vector/sass.svg') no-repeat center;
		mask: url('/images/vector/sass.svg') no-repeat center;
	}

	.css-logo {
		width: 1rem;
		height: 1rem;
		font-size: 0.7rem;
		display: flex;
		line-height: 0;
	}
</style>
