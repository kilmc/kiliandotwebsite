import type { PageLoad } from './$types';
import { loosies } from '$lib/db/loosies';

export const load = (({ params }) => {
	return {
		loosies
	};
}) satisfies PageLoad;

export const ssr = false;
export const prerender = false;
