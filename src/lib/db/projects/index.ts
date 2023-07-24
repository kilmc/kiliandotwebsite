type Metadata = {
	title: string;
	slug: string;
	linkURL: string;
	linkTitle: string;
};

export const projects: Record<string, App.MdsvexFile<Metadata>> = import.meta.glob('./*.md', {
	eager: true
});

export const projectsIndex = Object.values(projects).map((item) => {
	return {
		url: item.metadata?.slug,
		text: item.metadata?.title,
		poster: `/images/posters/project-${item.metadata?.slug}.png`
	};
});
