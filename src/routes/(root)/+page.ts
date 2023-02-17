import type { PageLoad } from './$types';

export const load = (({ url }) => {
	console.log(url.pathname);
	return {};
}) satisfies PageLoad;
