import { intervalsMap, notePositions, type TIntervalShorthand } from '../consts';
import { isFlat, isSharp, offsetArr } from '../helper';
import { getScale } from '../scale/getScale';

interface IForceVariant {
	forceFlat?: boolean;
	forceSharp?: boolean;
}

const pickNoteVariant = (notes: string[], srcNote: string, options?: IForceVariant) => {
	const [hasFlat, hasSharp] = [isFlat(srcNote), isSharp(srcNote)];

	if (options?.forceSharp || hasSharp) {
		return notes[0];
	}

	if (options?.forceFlat || hasFlat) {
		return notes[1];
	}

	return notes[1];
};

const pickNoteFromScale = (notes: string[], scale: string[] | undefined) => {
	if (scale === undefined) {
		return 'X';
	}

	const correctIndex = notes.findIndex((note) => scale.includes(note));

	return correctIndex >= 0 ? notes[correctIndex] : 'X';
};

interface INoteTransposeOptions {
	forceFlat?: boolean;
	forceSharp?: boolean;
	keyName?: string;
}

const getSemitones = (intervals: TIntervalShorthand) => {
	const semitones = intervalsMap[intervals];

	return semitones >= 12 ? semitones - 12 : semitones;
};

export const transposeNote = (
	note: string,
	intervals: TIntervalShorthand,
	options?: INoteTransposeOptions
) => {
	const noteIndex = notePositions.findIndex((notes) => notes.includes(note));
	const sortedNotes = offsetArr(notePositions, noteIndex);
	const transposedNotes = sortedNotes[getSemitones(intervals)];

	if (transposedNotes.length === 1) {
		return transposedNotes[0];
	}

	if (/a/i.test(intervals[0])) {
		return pickNoteVariant(transposedNotes, note, { forceSharp: true });
	}

	if (/d/i.test(intervals[0])) {
		return pickNoteVariant(transposedNotes, note, { forceFlat: true });
	}

	if (options?.keyName !== undefined) {
		return pickNoteFromScale(transposedNotes, getScale(options.keyName));
	}

	return pickNoteVariant(transposedNotes, note);
};
