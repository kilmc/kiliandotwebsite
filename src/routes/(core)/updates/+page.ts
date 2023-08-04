import type { PageLoad } from './$types';
import { updates } from '$lib/db/updates';

export const load = (() => {
	return {
		updates
	};
}) satisfies PageLoad;
