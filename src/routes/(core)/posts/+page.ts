import type { PageLoad } from './$types';
import { posts } from '$lib/db/posts';

export const load = (({ params }) => {
	return {
		posts: Object.entries(posts)
			.filter(([, post]) => post.metadata.published)
			.map(([, post]) => ({
				title: post.metadata.title,
				url: `/posts/${post.metadata.slug}`
			}))
	};
}) satisfies PageLoad;
