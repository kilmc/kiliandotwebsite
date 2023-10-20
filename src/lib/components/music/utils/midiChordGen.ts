import { getKey, scaleToSequentialKeys } from '@kilmc/music-fns';
import { Midi } from '@tonejs/midi';
import { downloadZip } from 'client-zip';

export const generateChordMidi = (notes: string[]) => {
	const sequentialNotes = scaleToSequentialKeys(notes, 4);
	const midi = new Midi();
	const track = midi.addTrack();

	sequentialNotes.forEach((note) => {
		track.addNote({
			midi: note,
			ticks: 0,
			durationTicks: 480 * 4
		});
	});

	return midi;
};

export const generateChordMidiFile = (fileName: string, notes: string[]) => {
	const chordMidi = generateChordMidi(notes);
	const chordFileName = `${fileName}.mid`;
	const chordFile = new File([chordMidi.toArray()], chordFileName, {
		type: 'audio/mid'
	});

	return {
		file: chordFile,
		fileName: chordFileName
	};
};

export const generateScaleChordsMidiZip = async (keyName: string) => {
	const key = getKey(keyName);
	const chords = key?.chords.map((chord, i) => {
		const fileName = `0${i + 1} - ${chord.romanNumeral} - ${chord.name}`;
		return generateChordMidiFile(fileName, chord.notes);
	});

	if (chords) {
		const chordFiles = chords.map((chord) => chord.file);
		const result = await downloadZip(chordFiles).blob();
		return result;
	}
};
