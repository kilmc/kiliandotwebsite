<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { getChord, guessMajorScale, major } from '@kilmc/music-fns';
	import KeySummary from './KeySummary.svelte';
	import Synth from './Synth.svelte';

	let chordName = 'C';
	$: chord = getChord(chordName);
	const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
	let inScale: string[] = [];
	let outScale: string[] = [];

	const cMajorScale = Object.entries(major).filter(([_, scale]) =>
		scale.notes.some((note) => !/[#b]/.test(note))
	);

	const sharpScales = Object.entries(major).filter(([_, scale]) =>
		scale.notes.some((note) => /#/.test(note))
	);

	const flatScales = Object.entries(major).filter(([_, scale]) =>
		scale.notes.some((note) => /b/.test(note))
	);

	const isSharp = (note: string) => /#/.test(note);

	$: guessedScales = guessMajorScale(inScale, outScale);
	$: filteredScales = cMajorScale.concat(sharpScales, flatScales).filter(([note]) => {
		const guesses = guessedScales.map((guess) => guess[0].replace(' major', ''));
		console.log(guesses, note);
		return guesses.includes(note);
	});
</script>

<h2 class="text-2xl font-bold uppercase mb-4">Music Tools</h2>

<div class="mb-10">
	<Input label="Chord name" id="chordName" bind:value={chordName} />
	Notes: {chord.notes.join(' ')}
</div>

<div class="mb-10">
	<h3 class="font-bold text-lg">Scale Guesser</h3>
	<div class="layout-piano">
		{#each notes as note}
			<label>
				<input type="checkbox" bind:group={inScale} name="flavours" value={note} />
				{note}
			</label>
		{/each}
	</div>
	<div class="layout-piano h-32 border border-black">
		{#each notes as note, i}
			<Synth
				note="{note}3"
				class="p-4  border-r border-black {isSharp(note)
					? 'bg-black text-white'
					: 'bg-white text-black'}
				{i !== notes.length ? 'border-r' : ''}
			"
			/>
		{/each}
	</div>

	<div class="layout-piano">
		{#each notes as note}
			<label>
				<input type="checkbox" bind:group={outScale} name="flavours" value={note} />
				{note}
			</label>
		{/each}
	</div>
</div>

<h3 class="font-bold text-lg mb-4">List of Keys</h3>
<div class="flex flex-col">
	{#each filteredScales as [_, { notes }]}
		<KeySummary scale={notes} />
	{/each}
</div>

<style lang="scss">
	.layout-piano {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
	}
</style>
