import { scaleTypes } from '@kilmc/music-fns';

const scaleTypeRegex = new RegExp(scaleTypes.map((type) => type.replace(' ', '-')).join('|'))
	.source;

const wordToAccidental = (input: string) => {
	if (/flat/.test(input)) return 'b';
	if (/sharp/.test(input)) return '#';
	return '';
};

export const parseKeyName = (input: string) => {
	const regex = new RegExp(`(?:([a-g])-)(?:(flat|sharp)-)?(${scaleTypeRegex})`);
	const [rawNote, accidentalWord, rawType] = input.match(regex)?.slice(1, 4) || [];
	const note = rawNote.toUpperCase();
	const type = rawType.replace('-', ' ');
	const accidental = wordToAccidental(accidentalWord);

	return `${note}${accidental} ${type}`;
};
