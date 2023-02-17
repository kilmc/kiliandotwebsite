import type { PageLoad } from './$types';
import { lists } from '$lib/db/lists';
import { error } from '@sveltejs/kit';

export const load = (({ params }) => {
	const list = lists
		.filter((list) => list.type === 'favourites')
		.find((list) => list.category === params.category);

	if (list === undefined) {
		throw error(404, 'Not Found');
	}

	return {
		...list
	};
}) satisfies PageLoad;
