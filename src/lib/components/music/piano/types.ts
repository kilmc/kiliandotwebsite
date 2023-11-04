export type PianoKeyType = {
	type: 'white' | 'black';
	notes: string[];
	midiNumber: number;
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
	midiNumber: number;
};

export type NoteDisplay = {
	note: string;
	midiNumber: number;
};

export const pianoKeyModes = ['synth', 'filter'] as const;

export type PianoKeyMode = (typeof pianoKeyModes)[number];
