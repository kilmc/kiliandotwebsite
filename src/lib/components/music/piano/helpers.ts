import { pianoKeys } from './consts';
import type { PianoKeyType } from './types';

export const groupKeys = (arr: PianoKeyType[]) =>
	arr.reduce<PianoKeyType[][]>((result, value, index, arr) => {
		const isGroupable = arr[index - 1]?.type === 'white' && value.type === 'black';
		isGroupable ? result[result.length - 1].push(value) : result.push([value]);

		return result;
	}, []);

export const compareArrs = (arr1: string[], arr2: string[]) => {
	return arr1.some((note) => arr2.includes(note));
};

export const wordToAccidental = (word: string | undefined) => {
	switch (word) {
		case 'flat':
			return 'b';
		case 'sharp':
			return '#';
		case undefined:
			return '';
		default:
			break;
	}
};

export const accidentalToWord = (accidental: string | undefined) => {
	switch (accidental) {
		case 'b':
			return 'flat';
		case '#':
			return 'sharp';
		case undefined:
			return '';
		default:
			break;
	}
};

export const getSynthNote = (key: PianoKeyType, startingOctave: number = 3) => {
	const octave = key.midiNumber < 12 ? startingOctave : startingOctave + 1;
	return `${key.notes[0]}${octave}`;
};

export const getPianoKeys = (octaves: number) =>
	groupKeys(
		Array<PianoKeyType | PianoKeyType[]>(octaves)
			.fill(pianoKeys)
			.flatMap((key) => {
				return key;
			})
			.map((key, i) => ({ ...key, midiNumber: i + 60 }) as PianoKeyType)
	);
