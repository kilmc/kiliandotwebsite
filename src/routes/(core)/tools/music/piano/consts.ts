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
