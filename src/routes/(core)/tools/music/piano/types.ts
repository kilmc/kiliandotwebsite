import type { Range } from '$lib/types/utils';

export type Key = {
	type: 'white' | 'black';
	notes: string[];
	midiNumber: MIDINumber;
};

type PitchClass = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type Accidentals = '#' | 'b';

export type Note = PitchClass | `${PitchClass}${Accidentals}`;

export type ScaleDegree =
	| 'tonic'
	| 'supertonic'
	| 'mediant'
	| 'subdominant'
	| 'dominant'
	| 'submediant'
	| 'leading';

export type HighlightedNote = {
	noteName: Note;
	midiNumber: MIDINumber;
};

export type MIDINumber = Range<0, 127>;

export type NoteDisplay = {
	note: string;
	midiNumber: number;
};
