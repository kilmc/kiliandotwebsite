import type { PageServerLoad } from './$types';
import { projects } from '$lib/db/projects';

export const load = (async () => {
	const projectsItems = Object.values(projects).map((item) => {
		return {
			url: `projects/${item.metadata?.slug}`,
			text: item.metadata?.title,
			poster: `/images/posters/project-${item.metadata?.slug}.png`,
			skills: item.metadata?.skills
		};
	});

	const allSkills = [
		...new Set(Object.values(projects).flatMap((project) => project.metadata?.skills))
	];

	return {
		items: projectsItems,
		skills: allSkills
	};
}) satisfies PageServerLoad;
