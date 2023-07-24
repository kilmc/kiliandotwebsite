type Metadata = {
	title: string;
	date: string;
	slug: string;
	published: boolean;
};

const postsSource: Record<string, App.MdsvexFile<Metadata>> = import.meta.glob('./*.md', {
	eager: true
});

export const posts = Object.entries(postsSource).filter(([, post]) => post.metadata?.published);
export const postsIndex = posts.map(([, post]) => ({
	title: post.metadata?.title,
	url: `/posts/${post.metadata?.slug}`
}));
