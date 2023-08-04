type Metadata = {
	date: string;
	published: boolean;
};

const updatesSource: Record<string, App.MdsvexFile<Metadata>> = import.meta.glob('./*.md', {
	eager: true
});

export const updates = Object.entries(updatesSource)
	.filter(([, update]) => update.metadata?.published)
	.sort(([, a], [, b]) => {
		if (!b.metadata || !a.metadata) return 0;

		return new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf();
	});
