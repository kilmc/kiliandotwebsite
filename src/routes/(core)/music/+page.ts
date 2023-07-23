import type { PageLoad } from './$types';
import { releases } from '$lib/db/releases';

export const load = (({ params }) => {
	console.log(releases);
}) satisfies PageLoad;
