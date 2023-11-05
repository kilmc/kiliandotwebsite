import { majorModalKeyNames, readScale } from '@kilmc/music-fns';
import type { PageServerLoad } from './$types';
import { convertKeyToURL } from '$lib/components/music/helpers';

const inNotes = ['C', 'G', 'D', 'A', 'E', 'B', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F'];

const romanNumeralClasses = [
	'bg-red-100 dark:bg-red-200 dark:text-red-900',
	'bg-orange-100 dark:bg-orange-200 dark:text-orange-900',
	'bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-900',
	'bg-green-100 dark:bg-green-200 dark:text-green-900',
	'bg-blue-100 dark:bg-blue-200 dark:text-blue-900',
	'bg-indigo-100 dark:bg-indigo-200 dark:text-indigo-900',
	'bg-violet-100 dark:bg-violet-200 dark:text-violet-900'
];

type Item = { name: string; href: string; classes: string };

const majorScaleGroups = Object.entries(majorModalKeyNames).map((modeItem, index) => {
	const filteredScales: Item[] = modeItem[1]
		.filter((scaleName) => {
			return inNotes.some((note) => {
				const { noteName } = readScale(scaleName);
				return noteName === note;
			});
		})
		.map((scaleName) => {
			return {
				name: scaleName,
				href: convertKeyToURL(scaleName) || '',
				classes: romanNumeralClasses[index]
			};
		});
	return [modeItem[0], filteredScales] as [string, Item[]];
});

export const load = (async () => {
	return {
		majorScaleGroups
	};
}) satisfies PageServerLoad;
