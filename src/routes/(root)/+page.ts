import type { PageLoad } from './$types';
import { postsIndex } from '$lib/db/posts';
import { listsIndex } from '$lib/db/lists';
import { projectsIndex } from '$lib/db/projects';

const randomItem = <T>(arr: T[]) => {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
};

export const load = (() => {
	const { url: listURL, title: listText } = randomItem(listsIndex);
	const { url: postURL, title: postText } = randomItem(postsIndex);
	const { url: projectURL, text: projectText } = randomItem(projectsIndex);

	return {
		randomItems: [
			{ type: 'Post', title: postText, url: postURL },
			{ type: 'List', title: listText, url: listURL },
			{ type: 'Project', title: projectText, url: projectURL }
		]
	};
}) satisfies PageLoad;
