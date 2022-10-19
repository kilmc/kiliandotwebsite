import { getChords } from '../chords/getChords';
import { majors, modes } from '../consts';
import { isMajor, offsetArr } from '../helper';
import { getModeName } from '../modes/getName';
import { extractScaleName } from '../scale/extractName';
import { getMajorFromMode } from '../scale/getMajorFromMode';
import type { TMode } from '../types';
import { getRelativeMinorName } from './helpers';

export const getKey = (key: string) => {
	const [pitch, mode] = extractScaleName(key) || [];

	if (mode === undefined || pitch === undefined) {
		return;
	}

	const keyQuality = getModeName(mode);
	const majorPitch = isMajor(mode) ? pitch : getMajorFromMode(pitch, mode);
	const majorScale = majors[majorPitch];
	const scale = offsetArr(majorScale, modes.indexOf(mode));

	return {
		name: `${pitch} ${keyQuality}`,
		notes: scale,
		major: majorScale,
		minor: getRelativeMinorName(pitch),
		modes(name: TMode) {
			return offsetArr(majorScale, modes.indexOf(name));
		},
		chords: getChords(scale, mode)
	};
};