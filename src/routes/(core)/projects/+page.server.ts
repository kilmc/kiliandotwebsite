import type { PageServerLoad } from './$types';
import { projects } from '$lib/db/projects';
import { getIndexUrls } from '$lib/helpers/getIndexUrls';

export const load = (async ({ url }) => {
	return {
		items: getIndexUrls(Object.keys(projects), url.pathname)
	};
}) satisfies PageServerLoad;
