import type { PageLoad } from './$types';
import { updates } from '$lib/db/updates';

export const load = (({ data }) => {
	const [, lastUpdate] = updates[0];
	return {
		...data,
		lastUpdate
	};
}) satisfies PageLoad;
