import { majors, modes } from '../consts';
import { offsetArr } from '../helper';
import { extractScaleName } from './extractName';

export const getScale = (scaleName: string) => {
	const [pitchClass, mode] = extractScaleName(scaleName) || [];
	if (pitchClass && mode !== undefined) {
		return offsetArr(majors[pitchClass], modes.indexOf(mode));
	}
};
