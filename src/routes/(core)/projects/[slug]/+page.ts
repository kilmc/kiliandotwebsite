import type { PageLoad } from './$types';
import { projects } from '$lib/db/projects';

export const load = (({ params }) => {
	const file = Object.values(projects).find((file) => file.metadata?.slug === params.slug);

	if (file !== undefined && file.metadata) {
		return {
			title: file.metadata.title,
			linkURL: file.metadata.linkURL,
			linkTitle: file.metadata.linkTitle,
			content: file.default
		};
	}
}) satisfies PageLoad;
