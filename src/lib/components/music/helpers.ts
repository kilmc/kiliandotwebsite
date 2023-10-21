import { extractScaleName } from '@kilmc/music-fns';
import { accidentalToWord } from './piano/helpers';

export const convertKeyToURL = (scaleName: string | undefined) => {
	const defaultURL = '/tools/music/keys/c-major';
	if (scaleName === undefined) return defaultURL;

	const [extractPitch, scaleType] = extractScaleName(scaleName) || [];

	if (extractPitch === undefined) return;

	const match = extractPitch.match(/([A-G])([#b])?/)?.slice(1, 3);

	if (match === undefined) return;

	const pitch = match[0].toLowerCase();
	const accidental = accidentalToWord(match[1]);

	if (match) {
		return `/tools/music/keys/${pitch}${accidental ? '-' + accidental : ''}-${scaleType}`;
	} else {
		return defaultURL;
	}
};
