import { isModeName } from '../modes/helpers';
import type { TMode } from '../types';

export const extractScaleName = (name: string): [string, TMode] | undefined => {
	const regex = new RegExp(/([A-G](?:b|#)?) (\w+)/);
	const [pitchClass, scale] = name.match(regex)?.slice(1, 3) || [];

	if ((pitchClass || scale) === undefined) {
		console.log('Not a scale');
	}

	if (scale === 'major') {
		return [pitchClass, 'ionian'];
	}

	if (scale === 'minor') {
		return [pitchClass, 'aeolian'];
	}

	if (isModeName(scale)) return [pitchClass, scale];
};
