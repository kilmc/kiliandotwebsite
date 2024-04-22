import type { PageServerLoad } from './$types';
import { projects } from '$lib/db/projects';
import { getJobsByEmployer } from '$lib/db/jobs';

export const load = (async () => {
	const projectsItems = Object.values(projects)
		.filter((project) => project.metadata?.published)
		.map((item) => {
			return {
				url: `projects/${item.metadata?.slug}`,
				text: item.metadata?.title,
				poster: `/images/posters/project-${item.metadata?.slug}.png`,
				skills: item.metadata?.skills,
				description: item.metadata?.description
			};
		});

	const allSkills = [
		...new Set(Object.values(projects).flatMap((project) => project.metadata?.skills))
	];

	return {
		items: projectsItems,
		skills: allSkills,
		jobs: getJobsByEmployer()
	};
}) satisfies PageServerLoad;
