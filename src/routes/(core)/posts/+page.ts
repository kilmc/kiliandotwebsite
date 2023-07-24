import type { PageLoad } from './$types';
import { postsIndex } from '$lib/db/posts';

export const load = (() => {
	return {
		posts: postsIndex
	};
}) satisfies PageLoad;
