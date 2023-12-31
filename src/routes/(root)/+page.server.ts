import type { PageServerLoad } from './$types';
import { postsIndex } from '$lib/db/posts';
import { listsIndex } from '$lib/db/lists';
import { projectsIndex } from '$lib/db/projects';
import { heavyRotationMonths } from '$lib/db/heavy-rotation';

const randomItem = <T>(arr: T[]) => {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
};

const currentHeavyRotation = Object.entries(heavyRotationMonths).find(([dateStr]) => {
	const [year, month] =
		dateStr
			.match(/(\d{4})-(\d{2})/)
			?.slice(1, 3)
			.map((x) => parseInt(x)) || [];
	const now = new Date(Date.now());

	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth() + 1;

	return year === currentYear && month === currentMonth;
});
export const load = (() => {
	const { url: listURL, title: listText } = randomItem(listsIndex);
	const { url: postURL, title: postText } = randomItem(postsIndex);
	const { url: projectURL, text: projectText } = randomItem(projectsIndex);

	return {
		randomItems: [
			{ type: 'Post', title: postText, url: postURL },
			{ type: 'List', title: listText, url: `lists/${listURL}` },
			{ type: 'Project', title: projectText, url: `projects/${projectURL}` }
		],
		heavyRotation:
			currentHeavyRotation !== undefined
				? {
						month: new Date(Date.now()).toLocaleString('default', { month: 'long' }),
						items: currentHeavyRotation[1]
				  }
				: undefined
	};
}) satisfies PageServerLoad;
