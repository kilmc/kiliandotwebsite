<script lang="ts">
	import { getChord } from '@kilmc/music-fns';
	import { generateChordMidiFile } from './utils/midiChordGen';

	export let chordName = 'C';

	$: chord = getChord(chordName);
	$: fileData = chord !== undefined ? generateChordMidiFile(chordName) : undefined;
	$: url = fileData !== undefined ? URL.createObjectURL(fileData.file) : undefined;
</script>

{#if fileData !== undefined}
	<a href={url} download={fileData.fileName}>
		<slot />
	</a>
{/if}
