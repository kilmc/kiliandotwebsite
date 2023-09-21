import type { Key } from './types';

export const groupKeys = (arr: Key[]) =>
	arr.reduce<Key[][]>((result, value, index, arr) => {
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
