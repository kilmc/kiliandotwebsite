import type { PageLoad } from './$types';
import { lists } from '$lib/db/lists';
import { error } from '@sveltejs/kit';
import { startCase } from 'lodash-es';

export const load = (({ params }) => {
	const yearLists = lists.filter((list) => list.year === Number(params.year));
	const categoryLists = yearLists.filter((list) => list.category === params.category);
	const list = categoryLists.at(0);

	if (yearLists.length === 0 || categoryLists.length === 0 || list === undefined) {
		throw error(404, 'Not Found');
	}

	const title = startCase(`Best ${list.category} of ${list.year}`);
	const relatedLists = lists
		.filter((list) => list.category === params.category)
		.map((list) => ({
			url: `/lists/${list.year}/${list.category}`,
			title: list.year
		}))
		.sort((a, b) => b.title - a.title);

	return {
		title: title,
		list: list,
		relatedLists
	};
}) satisfies PageLoad;
