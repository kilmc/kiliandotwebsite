import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Palette = {
	hexValue: string;
	name: string;
};

let storedPalette: Palette[] = [{ hexValue: '#FF0099', name: 'pink' }];
if (browser) {
	const lsPalette = localStorage.palettes;

	storedPalette = lsPalette !== undefined ? JSON.parse(lsPalette) : storedPalette;
}

export const palettes = writable(storedPalette);
palettes.subscribe((value) => {
	if (browser) {
		localStorage.palettes = JSON.stringify(value);
	}
});
