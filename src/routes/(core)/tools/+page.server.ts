import type { PageServerLoad } from './$types';
import type { SvelteComponent } from 'svelte';
import { getIndexUrls } from '$lib/helpers/getIndexUrls';

const files: Record<string, SvelteComponent> = import.meta.glob('./**/*.svelte', {
	eager: true
});

export const load = (async ({ url }) => {
	return {
		items: getIndexUrls(Object.keys(files), url.pathname)
	};
}) satisfies PageServerLoad;
