<script lang="ts">
	import { getChord } from '@kilmc/music-fns';
	import ChordChoice from './ChordChoice.svelte';
	import DownloadChordMidi from '$lib/components/music/DownloadChordMidi.svelte';
	import Download from '$lib/components/icons/Download.svelte';
	import { accidentals, adds, extensions, qualities, rootNotes, suss } from '../consts';
	import ChordDisplay from './ChordDisplay.svelte';

	let currentNote = 'C';
	let currentAccidental = '';
	let currentQuality = '';
	let currentAdd = '';
	let currentSus = '';
	let currentExtension = '';

	const setNote = (input: string) => {
		currentNote = input;
	};
	const setQuality = (input: string) => {
		input === currentQuality ? (currentQuality = '') : (currentQuality = input);
	};
	const setAccidental = (input: string) =>
		input === currentAccidental ? (currentAccidental = '') : (currentAccidental = input);
	const setAdd = (input: string) =>
		input === currentAdd ? (currentAdd = '') : (currentAdd = input);
	const setSus = (input: string) =>
		input === currentSus ? (currentSus = '') : (currentSus = input);

	const setExtension = (input: string) =>
		input === currentExtension ? (currentExtension = '') : (currentExtension = input);

	const chordNameClasses: Record<number, string> = {
		1: 'text-[8em]',
		2: 'text-[8em]',
		3: 'text-[6em]',
		4: 'text-[6em]',
		5: 'text-[5em]',
		6: 'text-[5em]',
		7: 'text-[4.5em]',
		8: 'text-[4em]',
		9: 'text-[3em]',
		10: 'text-[3em]',
		11: 'text-[3em]'
	};

	$: chordName = `${currentNote}${currentAccidental}${currentQuality}${currentExtension}${currentSus}${currentAdd}`;
	$: chord = getChord(chordName);
	$: chordClasses =
		chordNameClasses[chordName.length] !== undefined
			? chordNameClasses[chordName.length]
			: 'text-4xl';
</script>

<svelte:head>
	<title>Tools | Chords</title>
</svelte:head>

<div class="mb-10">
	<h2 class="font-bold mb-4 text-2xl uppercase">Chords</h2>

	<div class="grid lg:grid-cols-2 gap-6 mb-1">
		<ChordDisplay name={chordName} notes={chord?.notes} />

		<div>
			<ChordChoice
				sectionTitle="Notes"
				options={rootNotes}
				updateFn={setNote}
				currentValue={currentNote}
			/>

			<div class="grid grid-cols-[auto_1fr] gap-x-4">
				<ChordChoice
					sectionTitle="Flat/Sharp"
					options={accidentals}
					updateFn={setAccidental}
					currentValue={currentAccidental}
				/>

				<ChordChoice
					sectionTitle="Quality"
					options={qualities}
					updateFn={setQuality}
					currentValue={currentQuality}
				/>
			</div>

			<div class="grid grid-cols-2 gap-x-4">
				<ChordChoice
					sectionTitle="Add"
					options={adds}
					updateFn={setAdd}
					currentValue={currentAdd}
				/>

				<ChordChoice
					sectionTitle="Sus"
					options={suss}
					updateFn={setSus}
					currentValue={currentSus}
				/>
			</div>
			<div>
				<ChordChoice
					sectionTitle="Extensions"
					options={extensions}
					updateFn={setExtension}
					currentValue={currentExtension}
				/>
			</div>
		</div>
	</div>
</div>
