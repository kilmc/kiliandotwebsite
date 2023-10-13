import type { Key } from './types';

export const pianoKeys: Key[] = [
	{ type: 'white', notes: ['C', 'B#'], midiNumber: 0 },
	{ type: 'black', notes: ['C#', 'Db'], midiNumber: 1 },
	{ type: 'white', notes: ['D'], midiNumber: 2 },
	{ type: 'black', notes: ['D#', 'Eb'], midiNumber: 3 },
	{ type: 'white', notes: ['E', 'Fb'], midiNumber: 4 },
	{ type: 'white', notes: ['F', 'E#'], midiNumber: 5 },
	{ type: 'black', notes: ['F#', 'Gb'], midiNumber: 6 },
	{ type: 'white', notes: ['G'], midiNumber: 7 },
	{ type: 'black', notes: ['G#', 'Ab'], midiNumber: 8 },
	{ type: 'white', notes: ['A'], midiNumber: 9 },
	{ type: 'black', notes: ['A#', 'Bb'], midiNumber: 10 },
	{ type: 'white', notes: ['B', 'Cb'], midiNumber: 11 }
];

const scaleDegreeNames = [
	'tonic',
	'supertonic',
	'mediant',
	'subdominant',
	'dominant',
	'submediant',
	'subtonic',
	'leading'
] as const;

type ScaleDegreeName = (typeof scaleDegreeNames)[number];

type ScaleDegree = {
	name: ScaleDegreeName;
	numeral: 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VII';
	bgClass: string;
	textClass: string;
};

export const scaleDegrees: ScaleDegree[] = [
	{ name: 'tonic', numeral: 'I', bgClass: 'bg-red-300', textClass: 'text-red-700' },
	{ name: 'supertonic', numeral: 'II', bgClass: 'bg-orange-300', textClass: 'text-orange-700' },
	{ name: 'mediant', numeral: 'III', bgClass: 'bg-yellow-300', textClass: 'text-yellow-700' },
	{ name: 'subdominant', numeral: 'IV', bgClass: 'bg-green-300', textClass: 'text-green-700' },
	{ name: 'dominant', numeral: 'V', bgClass: 'bg-blue-300', textClass: 'text-blue-700' },
	{ name: 'submediant', numeral: 'VI', bgClass: 'bg-indigo-300', textClass: 'text-indigo-700' },
	{ name: 'leading', numeral: 'VII', bgClass: 'bg-violet-300', textClass: 'text-violet-700' }
];
