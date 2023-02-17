import type { PageServerLoad } from './$types';
import { favouritesLinkItems, yearEndLinkItems } from '$lib/db/lists';
import { addPathname } from '$lib/helpers/addPathname';
import type { LinkItem } from '$lib/types';

const groupByYear = (arr: LinkItem[]) =>
	arr.reduce<Record<number | string, LinkItem[]>>((groups, item) => {
		if (item.group === undefined) return groups;
		const key = item.group;
		if (groups[key]) {
			groups[key].push(item);
		} else {
			groups[key] = [item];
		}
		return groups;
	}, {});

export const load = (async ({ url }) => {
	return {
		favourites: addPathname(favouritesLinkItems, `${url.pathname}/favourites/`),
		yearEnd: Object.entries(groupByYear(addPathname(yearEndLinkItems, `${url.pathname}/`))).sort(
			(a, b) => {
				return Number(b[0]) - Number(a[0]);
			}
		)
	};
}) satisfies PageServerLoad;
