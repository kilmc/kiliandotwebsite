import { getKey, getChord } from '@kilmc/music-fns';
import { downloadZip } from 'client-zip';
import * as pkg from '@tonejs/midi';
const { Midi } = pkg;

export const generateChordMidi = (notes: number[]) => {
	const midi = new Midi();
	const track = midi.addTrack();

	notes.forEach((note) => {
		track.addNote({
			midi: note,
			ticks: 0,
			durationTicks: 480 * 4
		});
	});

	return midi;
};

export const generateChordMidiFile = (chordName: string) => {
	const chord = getChord(chordName);
	if (chord === undefined) return undefined;
	const notes = chord.notes.map((note) => note.midiNumber);
	const chordMidi = generateChordMidi(notes);
	const chordFileName = `${chordName}.mid`;
	const chordFile = new File([chordMidi.toArray()], chordFileName, {
		type: 'audio/mid'
	});

	return {
		file: chordFile,
		fileName: chordFileName
	};
};

export const generateScaleChordsMidiZip = (keyName: string) => {
	const key = getKey(keyName);
	const chords = key?.chords.map((chord, i) => {
		const fileName = `0${i + 1} - ${chord.romanNumeral} - ${chord.name}`;
		return generateChordMidiFile(fileName);
	});

	if (chords) {
		const chordFiles = chords.filter(Boolean).map((chord) => chord.file);
		const result = downloadZip(chordFiles).blob();
		return result;
	}
};
