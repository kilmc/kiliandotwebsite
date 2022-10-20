import { majorScaleQualities, modes } from '../consts';
import { offsetArr } from '../helper';
import type { TChordQuality, TMode } from '../types';
import { getChord } from './getChord';

const scaleQualitiesToChordSymbol = (quality: TChordQuality) => {
	switch (quality) {
		case 'major':
			return '';
		case 'minor':
			return 'm';
		case 'diminished':
			return 'dim';
		default:
			return 'major';
	}
};

export const getChords = (scale: string[], mode: TMode) => {
	const scaleQualities = offsetArr(majorScaleQualities, modes.indexOf(mode));

	return scale.map((note, i) => {
		const quality = scaleQualitiesToChordSymbol(scaleQualities[i]);
		return getChord(`${note}${quality}`);
	});
};
