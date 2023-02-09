import type { PageLoad } from './$types';
import { posts } from '$lib/db/posts';

export const load = (({ params }) => {
	const file = Object.values(posts).find((file) => file.metadata.slug === params.slug);

	if (file !== undefined) {
		return {
			title: file.metadata.title,
			date: new Date(file.metadata.date).toLocaleDateString('en-EN', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}),
			content: file.default
		};
	}
}) satisfies PageLoad;
