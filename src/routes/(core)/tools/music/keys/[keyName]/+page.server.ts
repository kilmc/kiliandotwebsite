import type { PageServerLoad } from './$types';
import { getKey, readScale } from '@kilmc/music-fns';
import { parseKeyName } from './parseKeyName';
import { convertKeyToURL } from '$lib/components/music/helpers';
import { offsetArr } from '$lib/helpers/array';

export const load = (({ params }) => {
	const keyName = parseKeyName(params.keyName);
	const key = getKey(keyName);

	if (key !== undefined) {
		let relativeModeItems;
		if (key.relativeModes) {
			const currentModeIndex = key.relativeModes.findIndex((mode) => mode.includes(key.root));
			relativeModeItems = offsetArr(key?.relativeModes, currentModeIndex)
				.map((mode) => {
					return {
						name: readScale(mode).noteName,
						href: convertKeyToURL(mode)
					};
				})
				.filter(Boolean);
		}

		return {
			name: key.name,
			notes: key.notes,
			chords: key.chords,
			parallelModes: key.parallelModes
				?.map((mode) => {
					return { href: convertKeyToURL(mode) || '', name: mode };
				})
				.filter(Boolean),
			relativeModes: relativeModeItems
		};
	} else {
		return {
			name: undefined
		};
	}
}) satisfies PageServerLoad;
