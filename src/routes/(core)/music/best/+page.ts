import type { PageLoad } from './$types';
import { lists } from '$lib/db/lists';

const years = lists
	.filter((list) => list.category === 'music')
	.map((list) => list.year)
	.reduce<number[]>((accum, year) => (accum.indexOf(year) >= 0 ? accum : accum.concat(year)), [])
	.map((year) => ({
		url: `/music/best/${year}`,
		title: year
	}));

export const load = (({ params }) => {
	return {
		years
	};
}) satisfies PageLoad;
