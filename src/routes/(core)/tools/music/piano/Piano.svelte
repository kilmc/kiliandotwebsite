<script lang="ts">
	import { groupKeys } from './helpers';
	import { pianoKeys } from './consts';
	import type { Key, MIDINumber, NoteDisplay } from './types';
	import PianoKey from './PianoKey.svelte';

	const notePositions = [
		['C', 'B#'],
		['C#', 'Db'],
		['D'],
		['D#', 'Eb'],
		['E', 'Fb'],
		['F', 'E#'],
		['F#', 'Gb'],
		['G'],
		['G#', 'Ab'],
		['A'],
		['A#', 'Bb'],
		['B', 'Cb']
	];

	function isMidiNumber(value: any): value is MIDINumber {
		return (value as MIDINumber) >= 0 && value <= 127;
	}

	export const noteToMidi = (note: string): MIDINumber | undefined => {
		const regex = /^([A-G][b#]?)([0-9]|-1)$/;
		const match = note.match(regex)?.slice(1, 3);

		if (!match) return undefined;

		const [pitchClass, octave] = match;

		const noteNumber = notePositions.findIndex((notes) => notes.includes(pitchClass));
		const result = (parseInt(octave) + 1) * 12 + noteNumber;

		if (isMidiNumber(result)) {
			return result;
		}
	};

	export let octaves = 2;

	export let notes: string[] = [];

	const notesToMidiKeys = (scale: string[]) => {
		const startingNote = noteToMidi(`${scale[0]}-1`);

		return scale.map((note) => {
			const midiNote = noteToMidi(`${note}-1`);

			if (midiNote !== undefined && startingNote !== undefined) {
				const midiNumber = midiNote >= startingNote ? midiNote : midiNote + 12;
				return { midiNumber, note };
			} else {
				return { midiNumber: 120, note: 'C' };
			}
		});
	};

	const highlightedNotes: NoteDisplay[] = notesToMidiKeys(notes);

	$: processedKeys = groupKeys(
		Array<Key | Key[]>(octaves)
			.fill(pianoKeys)
			.flatMap((key) => {
				return key;
			})
			.map((key, i) => ({ ...key, midiNumber: i }) as Key)
	);
</script>

<div class="max-w">
	<div
		class="grid grid-cols piano--{octaves}-octave h-32 relative border-t-2 border-r-2 border-black"
	>
		{#each processedKeys as [white, black]}
			<div class="relative">
				<PianoKey {highlightedNotes} key={white} type="white" />
				{#if black !== undefined}
					<PianoKey {highlightedNotes} key={black} type="black" />
				{/if}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.piano--1-octave {
		grid-template-columns: repeat((7, minmax(0, 1fr)));
	}

	.piano--2-octave {
		grid-template-columns: repeat((14, minmax(0, 1fr)));
	}

	.piano--3-octave {
		grid-template-columns: repeat((21, minmax(0, 1fr)));
	}
</style>
