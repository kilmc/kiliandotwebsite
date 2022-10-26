import type { intervalsMap } from './consts';

export type TIntervalQuality = 'perfect' | 'major' | 'minor' | 'augmented' | 'diminished';
export type TChordQuality =
	| 'major'
	| 'minor'
	| 'augmented'
	| 'diminished'
	| 'half-diminished'
	| 'dominant';

export type TMode =
	| 'ionian'
	| 'dorian'
	| 'phrygian'
	| 'lydian'
	| 'myxolydian'
	| 'aeolian'
	| 'locrian';

export type TChordType =
	| 'second'
	| 'triad'
	| 'fourth'
	| 'fifth'
	| 'sixth'
	| 'seventh'
	| 'ninth'
	| 'eleventh'
	| 'thirteenth';

export type TIntervalShorthand = keyof typeof intervalsMap;

export type TAddType = 'add2' | 'add4' | 'add9' | 'add11' | 'add13';
export type TSusType = 'sus2' | 'sus4';

export interface IChordInfo {
	name: string;
	note: string;
	quality: TChordQuality;
	type?: TChordType;
	alteredNotes?: string[];
	addType?: TAddType;
	susType?: TSusType;
	slashNote?: string;
}

export interface IChord {
	name: string;
	notes: string[];
}
