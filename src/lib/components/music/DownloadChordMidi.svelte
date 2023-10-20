<script lang="ts">
	import { getChord } from '@kilmc/music-fns';
	import { generateChordMidiFile } from './utils/midiChordGen';

	export let chordName = 'C';

	$: chord = getChord(chordName);
	$: fileData = generateChordMidiFile(chordName, chord.notes);
	$: url = URL.createObjectURL(fileData.file);
</script>

<a
	href={url}
	download={fileData.fileName}
	class="bg-black dark:bg-white dark:text-black px-4 py-2 rounded-md text-white"
>
	Download <span class="font-bold">{fileData.fileName}</span>
</a>
