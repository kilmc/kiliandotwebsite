import { majorScaleQualities, modes } from '../consts';
import { offsetArr } from '../helper';
import type { TMode } from '../types';

export const getChords = (scale: string[], mode: TMode) => {
	const scaleQualities = offsetArr(majorScaleQualities, modes.indexOf(mode));

	return scale.map((note, i) => {
		const quality = scaleQualities[i] !== 'M' ? scaleQualities[i] : '';
		return `${note}${quality}`;
	});
};
