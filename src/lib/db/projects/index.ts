type Metadata = {
	title: string;
	slug: string;
	linkURL: string;
	linkTitle: string;
};

export const projects: Record<string, App.MdsvexFile<Metadata>> = import.meta.glob('./*.md', {
	eager: true
});
