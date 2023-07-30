import type { PageServerLoad } from './$types';
import { favouritesLinkItems, yearEndLinkItems } from '$lib/db/lists';
import { addPathname } from '$lib/helpers/addPathname';
import { groupBy } from '$lib/helpers/array';

export const load = (async ({ url }) => {
	console.log(url.pathname);
	return {
		favourites: addPathname(favouritesLinkItems, `${url.pathname}/favourites/`),
		yearEnd: Object.entries(
			groupBy(addPathname(yearEndLinkItems, `${url.pathname}/`), 'group')
		).sort((a, b) => {
			return Number(b[0]) - Number(a[0]);
		})
	};
}) satisfies PageServerLoad;
