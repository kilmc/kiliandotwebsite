import { error } from '@sveltejs/kit';
import { lists } from '$lib/db/lists';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	const paramsYear = Number(params.year);
	const yearLists = lists.filter((list) => list.year === paramsYear);

	if (yearLists.length === 0) {
		throw error(404, 'Not Found');
	}

	const relatedLists = lists
		.filter((list) => list.category === 'music')
		.map((list) => list.year)
		.reduce<number[]>((accum, year) => (accum.indexOf(year) >= 0 ? accum : accum.concat(year)), [])
		.map((year) => ({
			url: `/music/best/${year}`,
			title: year
		}));

	return {
		year: Number(paramsYear),
		lists: yearLists,
		relatedLists
	};
}) satisfies PageLoad;
