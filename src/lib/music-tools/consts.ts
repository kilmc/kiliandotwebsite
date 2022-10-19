export const intervalsMap = {
	d2: 0,
	P1: 0,
	A1: 1,
	d3: 2,
	m2: 1,
	M2: 2,
	A2: 3,
	m3: 3,
	d4: 4,
	M3: 4,
	A3: 5,
	P4: 5,
	A4: 6,
	d5: 6,
	d6: 7,
	P5: 7,
	A5: 8,
	m6: 8,
	d7: 9,
	M6: 9,
	A6: 10,
	m7: 10,
	d8: 11,
	M7: 11,
	A7: 12,
	P8: 12,
	d9: 12,
	m9: 13,
	A8: 13,
	d10: 14,
	M9: 14,
	A9: 15,
	m10: 15,
	d11: 16,
	M10: 16,
	A10: 17,
	P11: 17,
	A11: 18,
	d12: 18,
	P12: 19,
	d13: 19,
	m13: 20,
	A12: 20,
	M13: 21,
	d14: 21,
	m14: 22,
	A13: 22,
	M14: 23,
	d15: 23,
	P15: 24,
	A14: 24,
	A15: 25
};

export type TIntervalShorthand = keyof typeof intervalsMap;

export const chordQualityIntervalsMap: Record<string, TIntervalShorthand[]> = {
	major: ['P1', 'M3', 'P5'],
	augmented: ['P1', 'M3', 'A5'],
	minor: ['P1', 'm3', 'P5'],
	diminished: ['P1', 'm3', 'd5']
};

export const notePositions = [
	['A'],
	['A#', 'Bb'],
	['B'],
	['C'],
	['C#', 'Db'],
	['D'],
	['D#', 'Eb'],
	['E'],
	['F'],
	['F#', 'Gb'],
	['G'],
	['G#', 'Ab']
];

export const majors: Record<string, string[]> = {
	C: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
	F: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
	Bb: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
	Eb: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
	Ab: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
	Db: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
	Gb: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
	Cb: ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb'],
	G: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
	D: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
	A: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
	E: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
	B: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
	'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
	'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#']
};

export const modes = ['ionian', 'dorian', 'phrygian', 'lydian', 'myxolydian', 'aeolian', 'locrian'];
export const majorScaleQualities = [
	'major',
	'minor',
	'minor',
	'major',
	'major',
	'minor',
	'diminished'
];
