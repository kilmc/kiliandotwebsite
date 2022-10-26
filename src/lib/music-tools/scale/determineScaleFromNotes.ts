import { majors } from '../consts';
import { getEquivalentNote } from '../notes/getEquivalentNote';

export const determineScaleFromNotes = ({
	melody = [],
	bassline = []
}: {
	melody: string[];
	bassline: string[];
}) => {
	const combinedNotes = [...new Set([...melody, ...bassline])];
	let possibleScales = Object.entries(majors);

	// check if the note is in any scale
	// filter the possible scales to only be ones where that note exists
	// once you reach the end of the scales, move to the next note

	combinedNotes.forEach((note) => {
		const reducedScaleOptions = possibleScales.filter(([name, scale]) => {
			return scale.includes(note) || scale.includes(getEquivalentNote(note));
		});

		if (reducedScaleOptions.length > 1) {
			possibleScales = reducedScaleOptions;
		}
	});

	return possibleScales.map(([name]) => `${name}`).join(' ');
};
