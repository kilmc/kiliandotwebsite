import type { PageLoad } from './$types';
import { posts } from '$lib/db/posts';

const pathToSlug = (path: string) => path.replace(/.*\/(.*)\.md/, '$1');

export const load = (({ params }) => {
	console.log(posts);
	const entry = Object.entries(posts).find(([filePath]) => pathToSlug(filePath) === params.slug);

	if (entry !== undefined) {
		const [, file] = entry;

		console.log('INNER');
		console.log('POST', file.metadata);
		return {
			...file.metadata,
			content: file.default
		};
	}
}) satisfies PageLoad;
