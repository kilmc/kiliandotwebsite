import type { PageLoad } from './$types';
import { lists } from '$lib/db/lists';
import { error } from '@sveltejs/kit';
import { startCase } from 'lodash-es';

export const load = (({ params }) => {
	const yearLists = lists.filter((list) => list.year === Number(params.year));
	const subCategoryLists = yearLists.filter((list) => list.subCategory === params.subCategory);
	const list = subCategoryLists.at(0);

	if (yearLists.length === 0 || subCategoryLists.length === 0 || list === undefined) {
		throw error(404, 'Not Found');
	}

	const title = startCase(`Best ${list.subCategory} of ${list.year}`);
	const relatedLists = lists
		.filter((list) => list.subCategory === params.subCategory)
		.map((list) => ({
			url: `/music/best/${list.year}/${list.subCategory}`,
			title: list.year
		}));

	return {
		title: title,
		list: list,
		relatedLists
	};
}) satisfies PageLoad;
