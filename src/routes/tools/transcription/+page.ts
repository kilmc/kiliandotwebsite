import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'Transcriptions',
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	};
};

export const ssr = false;
