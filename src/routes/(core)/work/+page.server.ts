import type { PageServerLoad } from './$types';
import { getJobsByEmployer } from '$lib/db/jobs';

export const load = (async ({ url }) => {
	return {
		grouped: getJobsByEmployer(url)
	};
}) satisfies PageServerLoad;
