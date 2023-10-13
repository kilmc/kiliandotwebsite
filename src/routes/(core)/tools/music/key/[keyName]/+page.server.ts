import type { PageServerLoad } from './$types';
import { wordToAccidental } from '../../piano/helpers';

export const load = (({ params }) => {
	const regex =
		/(([a-g])(?:-(flat|sharp))?(?:-)(major|minor|dorian|phrygian|lydian|mixolydian|locrian))/;

	const matches = params.keyName.match(regex)?.slice(2, 5);
	if (matches) {
		const [pitchClass, accidental, scaleType] = matches;

		const keyName = `${pitchClass.toUpperCase()}${wordToAccidental(accidental)} ${scaleType}`;

		return {
			keyName
		};
	} else {
		return {
			keyName: undefined
		};
	}
}) satisfies PageServerLoad;
