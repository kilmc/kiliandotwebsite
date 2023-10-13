<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { getChord, guessMajorScale, major } from '@kilmc/music-fns';
	import KeySummary from './KeySummary.svelte';
	import Piano from './piano/ScaleGuesserPiano.svelte';
	import { pianoKeyModes, type PianoKeyMode } from './piano/types';
	import { inScale, outScale } from './store';

	let chordName = 'C';
	$: chord = getChord(chordName);

	let selectedMode: PianoKeyMode = 'filter';

	const cMajorScale = Object.entries(major).filter(([_, scale]) =>
		scale.notes.every((note) => !/[#b]/.test(note))
	);

	const sharpScales = Object.entries(major).filter(([_, scale]) =>
		scale.notes.some((note) => /#/.test(note))
	);

	const flatScales = Object.entries(major).filter(([_, scale]) =>
		scale.notes.some((note) => /b/.test(note))
	);

	$: guessedScales = guessMajorScale($inScale, $outScale);
	$: filteredScales = cMajorScale.concat(sharpScales, flatScales).filter(([note]) => {
		const guesses = guessedScales.map((guess) => guess[0].replace(' major', ''));
		return guesses.includes(note);
	});
</script>

<h2 class="text-2xl font-bold uppercase mb-4">Music Tools</h2>

<div class="mb-10">
	<Input label="Chord name" id="chordName" bind:value={chordName} />
	Notes: {chord.notes.join(' ')}
</div>

<div class="mb-10">
	<div class="flex mb-2">
		<h3 class="font-bold text-lg">Major Scale Guesser</h3>
		<div class="ml-auto flex gap-2 items-center">
			{#each pianoKeyModes as mode}
				<label
					class="hover:bg-black/30 dark:hover:bg-white/30 text-center px-2"
					class:selected={selectedMode === mode}
				>
					<input type="radio" name="mode" value={mode} bind:group={selectedMode} class="hidden" />
					{mode}
				</label>
			{/each}
		</div>
	</div>

	<Piano mode={selectedMode} />
	<!-- <div class="flex">
		{#if $inScale.length > 0 || $outScale.length > 0}
			<button
				on:click={() => {
					inScale.set([]);
					outScale.set([]);
				}}
			>
				Reset filter
			</button>
		{/if}
	</div> -->
</div>

<h3 class="font-bold text-lg mb-4">List of Keys</h3>
<div class="flex flex-col">
	{#each filteredScales as [_, { notes }] (notes)}
		<KeySummary scale={notes} />
	{/each}
</div>

<style lang="scss">
	.selected {
		@apply bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white/80;
	}
</style>
