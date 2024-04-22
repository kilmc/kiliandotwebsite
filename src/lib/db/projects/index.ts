type Metadata = {
	title: string;
	slug: string;
	linkURL?: string;
	linkTitle?: string;
	skills?: string[];
	description: string;
	published: boolean;
};

export const projects: Record<string, App.MdsvexFile<Metadata>> = import.meta.glob('./*.md', {
	eager: true
});

export const projectsIndex = Object.values(projects)
	.filter((project) => project.metadata?.published)
	.map((item) => {
		const posterSlug = item.metadata?.slug ?? 'default';
		return {
			url: item.metadata?.slug,
			text: item.metadata?.title,
			poster: `/images/posters/project-${posterSlug}.png`,
			skills: item.metadata?.skills ?? [],
			description: item.metadata?.description
		};
	});
