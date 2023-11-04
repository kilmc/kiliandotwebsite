import { readScale } from '@kilmc/music-fns';
import { accidentalToWord } from './piano/helpers';

export const convertKeyToURL = (scaleName: string | undefined) => {
	const baseURL = '/tools/music/keys/';
	const defaultURL = `${baseURL}c-major`;
	if (scaleName === undefined) return defaultURL;

	const { noteName, type } = readScale(scaleName);

	if (noteName === undefined) return;

	const match = noteName.match(/([A-G])([#b])?/)?.slice(1, 3);

	if (match === undefined) return;

	const pitch = match[0].toLowerCase();
	const accidental = accidentalToWord(match[1]);

	if (match) {
		return `${baseURL}${pitch}${accidental ? '-' + accidental : ''}-${type?.replace(' ', '-')}`;
	} else {
		return defaultURL;
	}
};
