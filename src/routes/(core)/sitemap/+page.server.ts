import type { PageServerLoad } from './$types';
import type { SvelteComponent } from 'svelte';

const files: Record<string, SvelteComponent> = import.meta.glob('../**/*.svelte', {
	eager: true
});

const urls = Object.keys(files)
	.filter((fileName) => fileName.includes('+page.svelte'))
	.map((fileName) => fileName.replace('../', ''))
	.map((fileName) => fileName.replace('+page.svelte', ''))
	.map((fileName) => `/${fileName}`)
	.map((fileName) => fileName.replace('/./', '/sitemap/'));

export const load = (async () => {
	return {
		urls
	};
}) satisfies PageServerLoad;
