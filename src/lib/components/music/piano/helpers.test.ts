import { describe, it, expect } from 'vitest';
import { groupKeys } from './helpers';
import type { PianoKeyType } from './types';

const flatKeys: PianoKeyType[] = [
	{ type: 'white', notes: ['C', 'B#'], midiNumber: 0 },
	{ type: 'black', notes: ['C#', 'Db'], midiNumber: 1 },
	{ type: 'white', notes: ['D'], midiNumber: 2 },
	{ type: 'black', notes: ['D#', 'Eb'], midiNumber: 3 },
	{ type: 'white', notes: ['E'], midiNumber: 4 },
	{ type: 'white', notes: ['F', 'E#'], midiNumber: 5 },
	{ type: 'black', notes: ['F#', 'Gb'], midiNumber: 6 },
	{ type: 'white', notes: ['G'], midiNumber: 7 },
	{ type: 'black', notes: ['G#', 'Ab'], midiNumber: 8 },
	{ type: 'white', notes: ['A'], midiNumber: 9 },
	{ type: 'black', notes: ['A#', 'Bb'], midiNumber: 10 },
	{ type: 'white', notes: ['B', 'Cb'], midiNumber: 11 }
];

const keyGroups = [
	[
		{ type: 'white', notes: ['C', 'B#'], midiNumber: 0 },
		{ type: 'black', notes: ['C#', 'Db'], midiNumber: 1 }
	],
	[
		{ type: 'white', notes: ['D'], midiNumber: 2 },
		{ type: 'black', notes: ['D#', 'Eb'], midiNumber: 3 }
	],
	[{ type: 'white', notes: ['E'], midiNumber: 4 }],
	[
		{ type: 'white', notes: ['F', 'E#'], midiNumber: 5 },
		{ type: 'black', notes: ['F#', 'Gb'], midiNumber: 6 }
	],
	[
		{ type: 'white', notes: ['G'], midiNumber: 7 },
		{ type: 'black', notes: ['G#', 'Ab'], midiNumber: 8 }
	],
	[
		{ type: 'white', notes: ['A'], midiNumber: 9 },
		{ type: 'black', notes: ['A#', 'Bb'], midiNumber: 10 }
	],
	[{ type: 'white', notes: ['B', 'Cb'], midiNumber: 11 }]
];

describe('groupKeys', () => {
	it('groups keys', () => {
		expect(groupKeys(flatKeys)).toStrictEqual(keyGroups);
	});
});
