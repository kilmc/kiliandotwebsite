import type { PageServerLoad } from './$types';
export const projects: Record<string, App.MdsvexFile> = import.meta.glob('./**/*.svelte', {
	eager: true
});

export const load = (async ({ params }) => {
	return {
		projects: Object.keys(projects)
			.filter((item) => /\.\/[a-zA-Z]/.test(item))
			.map((item) => item.replace(/\.\/(.*)\/.*/, '$1'))
			.map((item) => ({ name: item.replace('-', ' '), url: `/projects/${item}` }))
	};
}) satisfies PageServerLoad;
