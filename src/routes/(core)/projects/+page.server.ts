import type { PageServerLoad } from './$types';
import { projects } from '$lib/db/projects';

export const load = (async ({ url }) => {
	const projectsItems = Object.values(projects).map((item) => {
		return {
			href: `${url.pathname}/${item.metadata.slug}`,
			text: item.metadata.title,
			poster: `/images/posters/project-${item.metadata.slug}.png`
		};
	});
	return {
		items: projectsItems
	};
}) satisfies PageServerLoad;
