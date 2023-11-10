<script lang="ts">
	import { getScale, scaleTypes } from '@kilmc/music-fns';
	import ChordChoice from '../chords/ChordChoice.svelte';
	import { accidentals, rootNotes } from '../consts';
	import ScaleDisplay from './ScaleDisplay.svelte';
	import ScaleTypes from './ScaleTypes.svelte';

	const majorModes = ['major', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'minor', 'locrian'];
	const melodicMinorModes = [
		'melodic minor',
		'dorian flat 2',
		'lydian augmented',
		'lydian dominant',
		'mixolydian flat 6',
		'aeolian flat 2',
		'super locrian'
	];

	const harmonicMinorModes = [
		'harmonic minor',
		'locrian natural 6',
		'ionian sharp 5',
		'dorian sharp 4',
		'phrygian dominant',
		'lydian sharp 2',
		'ultralocrian'
	];

	let currentNote = 'C';
	let currentAccidental = '';
	let currentScale = 'major';

	$: keyName = `${currentNote}${currentAccidental} ${currentScale}`;

	const setNote = (input: string) => {
		currentNote = input;
	};

	const setAccidental = (input: string) =>
		input === currentAccidental ? (currentAccidental = '') : (currentAccidental = input);

	$: scale = getScale(keyName);
	$: notes = scale?.notes.map((note) => note.name).filter(Boolean);
</script>

<svelte:head>
	<title>Tools | Scales</title>
</svelte:head>

<div class="@container">
	<h2 class="font-bold mb-4 text-2xl uppercase">Scales</h2>
	<div class="mb-4">
		<ScaleDisplay {notes} name={scale?.name} />
	</div>

	<div>
		<div class="grid grid-cols-[1fr_auto] gap-4">
			<ChordChoice
				sectionTitle="Notes"
				options={rootNotes}
				updateFn={setNote}
				currentValue={currentNote}
			/>
			<ChordChoice
				sectionTitle="Accidental"
				options={accidentals}
				updateFn={setAccidental}
				currentValue={currentAccidental}
			/>
		</div>
		<div>
			<h4 class="mb-1">Scale name</h4>

			<div class="last:border-b dark:border-zinc-600 border-zinc-300">
				<ScaleTypes
					label="Major Modes"
					names={majorModes}
					currentName={currentScale}
					onUpdate={(name) => {
						currentScale = name;
					}}
				/>

				<ScaleTypes
					label="Melodic Minor Modes"
					names={melodicMinorModes}
					currentName={currentScale}
					onUpdate={(name) => {
						currentScale = name;
					}}
				/>

				<ScaleTypes
					label="Harmonic Minor Modes"
					names={harmonicMinorModes}
					currentName={currentScale}
					onUpdate={(name) => {
						currentScale = name;
					}}
				/>
			</div>
		</div>
	</div>
</div>
