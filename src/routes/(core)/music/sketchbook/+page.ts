import type { PageLoad } from './$types';
import { loosies } from '$lib/db/loosies';

export const load = (() => {
	return {
		loosies
	};
}) satisfies PageLoad;
