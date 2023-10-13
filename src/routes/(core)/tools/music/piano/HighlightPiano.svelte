<script lang="ts">
	import { scaleToPianoKeys } from '@kilmc/music-fns';
	import { getPianoKeys } from './helpers';
	import type { Key, NoteDisplay } from './types';
	import PianoKey from './PianoKey.svelte';
	import HighlightPianoKey from './HighlightPianoKey.svelte';

	export let octaves = 2;
	export let notes: string[] = [];

	const highlightedNotes: NoteDisplay[] = scaleToPianoKeys(notes);
	const processedKeys = getPianoKeys(octaves);

	const isHightlighted = (key: Key) => {
		return highlightedNotes.some((note) => note.midiNumber === key.midiNumber);
	};
</script>

<div class="min-w-[25rem]">
	<div
		class="grid grid-cols h-32 relative border-t-2 border-r-2 border-black"
		style="grid-template-columns: repeat({octaves * 7}, minmax(0,1fr))"
	>
		{#each processedKeys as [white, black]}
			<div class="relative">
				<PianoKey type="white">
					<HighlightPianoKey isHightlighted={isHightlighted(white)} key={white} {notes} />
				</PianoKey>

				{#if black !== undefined}
					<PianoKey type="black">
						<HighlightPianoKey isHightlighted={isHightlighted(black)} key={black} {notes} />
					</PianoKey>
				{/if}
			</div>
		{/each}
	</div>
</div>
