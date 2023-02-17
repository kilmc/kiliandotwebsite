import type { PageLoad } from './$types';
import { projects } from '$lib/db/projects';

export const load = (({ params }) => {
	const file = Object.values(projects).find((file) => file.metadata.slug === params.slug);

	if (file !== undefined) {
		return {
			title: file.metadata.title,
			content: file.default
		};
	}
}) satisfies PageLoad;
