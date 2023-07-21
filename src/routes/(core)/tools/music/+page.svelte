<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { getChord, majorScales } from '@kilmc/music-fns';
	import KeySummary from './KeySummary.svelte';
	import Synth from './Synth.svelte';

	let chordName = 'C';
	$: chord = getChord(chordName);
	const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
	let inScale: string[] = [];
	let outScale: string[] = [];

	const sharpScales = Object.entries(majorScales).filter(([_, scale]) =>
		scale.some((note) => /#/.test(note))
	);
	const flatScales = Object.entries(majorScales).filter(([_, scale]) =>
		scale.some((note) => /b/.test(note))
	);

	const isSharp = (note: string) => /#/.test(note);
</script>

<div>
	<Input label="Chord name" id="chordName" bind:value={chordName} />
	Notes: {chord.notes.join(' ')}
</div>

<div />

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

<div class="layout">
	{#each sharpScales as [_, scale]}
		<KeySummary {scale} />
	{/each}
	{#each flatScales as [_, scale]}
		<KeySummary {scale} />
	{/each}
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.layout-piano {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
	}
</style>
