<script lang="ts">
	import { getPianoKeys } from './helpers';
	import type { PianoKeyType } from './types';
	import PianoKey from './PianoKey.svelte';
	import HighlightPianoKey from './HighlightPianoKey.svelte';
	import type { Note } from '@kilmc/music-fns';

	export let octaves = 2;
	export let notes: Note[] = [];

	const processedKeys = getPianoKeys(octaves);

	const getHighLightedNote = (key: PianoKeyType) => {
		const highlightedIndex = notes.findIndex((note) => key.midiNumber === note.midiNumber);

		console.log(notes, key.midiNumber);
		if (highlightedIndex >= 0) {
			return notes[highlightedIndex];
		} else {
			return undefined;
		}
	};
</script>

<div class="min-w-[34rem] sm:min-w-0">
	<div
		class="grid grid-cols h-40 relative border-t-2 border-r-2 border-black"
		style="grid-template-columns: repeat({octaves * 7}, minmax(0,1fr))"
	>
		{#each processedKeys as [white, black]}
			<div class="relative">
				<PianoKey type="white">
					<HighlightPianoKey key={white} highLightedNote={getHighLightedNote(white)} />
				</PianoKey>

				{#if black !== undefined}
					<PianoKey type="black">
						<HighlightPianoKey key={black} highLightedNote={getHighLightedNote(black)} />
					</PianoKey>
				{/if}
			</div>
		{/each}
	</div>
</div>
