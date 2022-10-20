import { chordQualityIntervalsMap, type TIntervalShorthand } from '../consts';
import { offsetArr } from '../helper';
import { transposeNote } from '../notes/transpose';
import type { TChordQuality } from '../types';

// const isMajor = (str: string) => /[A-G](?:#|b)?(?:M)?/.test(str);
// const isMinor = (str: string) => /[A-G](?:#|b)?(?:m)$/.test(str);

// const noteRegex = new RegExp(/(?:^[A-G])(?:#|b)/);
// const qualityRegex = new RegExp(/aug|dim|maj|m|M|o|\+/);

const chordRegexp = new RegExp(
	/((?:^[A-G])(?:#|b)?)(aug|dim|maj|m|M|o|\+)?(2|4|5|6|7|9|11|13)?((?:(?:#|b)(?:5|7|9|11|13))+)?(add(?:2|4|9|11|13)?)?(sus(?:2|4|9)?)?(\/[A-G](?:#|b)?)?/
);

type TChordType =
	| 'second'
	| 'triad'
	| 'fourth'
	| 'fifth'
	| 'sixth'
	| 'seventh'
	| 'ninth'
	| 'eleventh'
	| 'thirteenth';

const addTypes = ['add2', 'add4', 'add9', 'add11', 'add13'];
type TAddType = 'add2' | 'add4' | 'add9' | 'add11' | 'add13';

export function isAddType(value: string): value is TAddType {
	return addTypes.includes(value as TAddType);
}

const susTypes = ['sus2', 'sus4'];
type TSusType = 'sus2' | 'sus4';

export function isSusType(value: string): value is TSusType {
	return susTypes.includes(value as TSusType);
}

interface IChordInfo {
	name: string;
	note: string;
	quality: TChordQuality;
	type?: TChordType;
	alteredNotes?: string[];
	addType?: TAddType;
	susType?: TSusType;
	slashNote?: string;
}

const determineChordQuality = (quality?: string): TChordQuality => {
	if (quality === undefined || ['Δ', 'M', 'maj'].includes(quality)) {
		return 'major';
	}

	if (quality === 'm') {
		return 'minor';
	}

	if (['dim', 'o'].includes(quality)) {
		return 'diminished';
	}

	if (['ø'].includes(quality)) {
		return 'half-diminished';
	}

	if (['aug', '+'].includes(quality)) {
		return 'augmented';
	}

	return 'major';
};

const numberTypeChordMap: Record<string, TChordType> = {
	2: 'second',
	4: 'fourth',
	5: 'fifth',
	6: 'sixth',
	7: 'seventh',
	9: 'ninth',
	11: 'eleventh',
	13: 'thirteenth'
};

const isNumberType = (type: string) => {
	return numberTypeChordMap[type] !== undefined;
};

const determindChordType = (type?: string): TChordType => {
	return type === undefined ? 'triad' : numberTypeChordMap[type];
};

const determineAlteredNotes = (alteredNotes?: string) => {
	return alteredNotes === undefined
		? undefined
		: (alteredNotes.match(/(#|b)(?:5|7|9|11|13)/g) as string[]);
};

const determineAdd = (add?: string) => {
	return add && isAddType(add) ? add : undefined;
};

const determineSus = (sus?: string): TSusType | undefined => {
	if (sus === undefined) return undefined;
	if (['sus', 'sus4', 'sus9'].includes(sus)) return 'sus4';
	if (sus === 'sus2') return 'sus2';
	return undefined;
};

const determineSlashChord = (slashNote?: string) => {
	return slashNote?.replace('/', '');
};

const determineChord = (name: string): IChordInfo => {
	const [note, quality, type, altered, add, sus, slashNote] =
		name.match(chordRegexp)?.slice(1) || [];

	return {
		name,
		note,
		quality: determineChordQuality(quality),
		type: determindChordType(type),
		alteredNotes: determineAlteredNotes(altered),
		addType: determineAdd(add),
		susType: determineSus(sus),
		slashNote: determineSlashChord(slashNote)
	};
};

const chordInfoToIntervalMap = ({
	addType,
	alteredNotes,
	name,
	type,
	quality,
	susType
}: IChordInfo): TIntervalShorthand[] => {
	let intervals: TIntervalShorthand[] = chordQualityIntervalsMap[quality];

	if (type === 'fifth') {
		intervals = intervals.filter((interval) => !interval.includes('3'));
		intervals = intervals.concat('P8');
	}

	if (type === 'seventh') {
		intervals = intervals.concat('m7');
	}

	if (susType !== undefined) {
		intervals = intervals.map((interval) =>
			interval.includes('3') ? (susType === 'sus2' ? 'M2' : 'P4') : interval
		);
	}

	if (type === 'ninth' || name.includes('sus9')) {
		intervals = intervals.concat('m7', 'M9');
	}

	if (type === 'eleventh') {
		intervals = intervals.concat('m7', 'M9', 'P11');
	}

	if (type === 'thirteenth') {
		intervals = intervals.concat('m7', 'M9', 'P11', 'M13');
	}

	if (alteredNotes) {
		if (alteredNotes.includes('b5')) {
			intervals = intervals.map((interval) => (interval.includes('P5') ? 'd5' : interval));
		}
		if (alteredNotes.includes('#5')) {
			intervals = intervals.map((interval) => (interval.includes('P5') ? 'A5' : interval));
		}

		if (alteredNotes.includes('b9')) {
			intervals = intervals.concat('m9');
		}
		if (alteredNotes.includes('#9')) {
			intervals = intervals.concat('A9');
		}
	}

	if (addType) {
		if (addType.includes('2')) {
			intervals = [...intervals.slice(0, 1), 'M2', ...intervals.slice(1)];
		}
		if (addType.includes('4')) {
			intervals = [...intervals.slice(0, 2), 'P4', ...intervals.slice(2)];
		}
		if (addType.includes('9')) {
			intervals = intervals.concat('M9');
		}
		if (addType.includes('11')) {
			intervals = intervals.concat('P11');
		}
		if (addType.includes('13')) {
			intervals = intervals.concat('M13');
		}
	}

	return intervals;
};

interface IChord {
	name: string;
	notes: string[];
}

export const getChord = (name: string): IChord => {
	if (name === '') {
		return {
			name: `Type a chord`,
			notes: []
		};
	}

	const chordInfo = determineChord(name);
	const finalIntervals = chordInfoToIntervalMap(chordInfo);

	if (finalIntervals === undefined) {
		return {
			name: `${name} is not supported yet`,
			notes: []
		};
	}

	let notes = finalIntervals.map((interval) => transposeNote(chordInfo.note, interval));
	const { slashNote } = chordInfo;

	if (slashNote) {
		const triad = notes.slice(0, 3);
		if (triad.includes(slashNote)) {
			const rootNoteIndex = triad.indexOf(slashNote);
			notes = offsetArr(notes, rootNoteIndex);
		}
	}

	return {
		name,
		notes
	};
};
