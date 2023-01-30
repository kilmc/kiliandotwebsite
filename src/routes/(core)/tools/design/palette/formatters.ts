import type { Color } from './types';

export function generateTailwindConfig(name: string, colors: Color[]) {
	const entries = colors
		.map((color) => {
			const { h, s, l } = color.value;
			return `  ${color.graduation}: 'hsl(${h},${s}%,${l}%)',`;
		})
		.join('\n');
	return `'${name}': {\n${entries}\n}`;
}

export function generateSassConfig(name: string, colors: Color[]) {
	return colors
		.map((color) => {
			const { h, s, l } = color.value;
			return `$${name}-${color.graduation}: hsl(${h},${s}%,${l}%);`;
		})
		.join('\n');
}

export function generateCSSConfig(name: string, colors: Color[]) {
	return colors
		.map((color) => {
			const { h, s, l } = color.value;
			return `--${name}-${color.graduation}: hsl(${h},${s}%,${l}%);`;
		})
		.join('\n');
}
