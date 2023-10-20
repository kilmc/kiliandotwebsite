<script lang="ts">
	import { getChord, getKey } from '@kilmc/music-fns';
	import { generateChordMidiFile } from '../../../../../lib/components/music/utils/midiChordGen';
	import DownloadKeyChordMidi from '$lib/components/music/DownloadKeyChordMidi.svelte';
	import DownloadChordMidi from '$lib/components/music/DownloadChordMidi.svelte';
	let chordName = 'C';
	let keyName = 'C major';

	$: chord = getChord(chordName);
	$: fileData = generateChordMidiFile(chordName, chord.notes);
	$: url = URL.createObjectURL(fileData.file);

	$: fullKey = getKey(keyName);
</script>

<div class="mb-10">
	<h2 class="font-bold">Chord Midi</h2>
	<input class="border-2 px-3 py-1 text-black" bind:value={chordName} />
	{#if chord.name !== 'Type a chord'}
		<DownloadChordMidi chordName={chord.name} />
	{/if}
	<div>
		{chord.notes}
	</div>
</div>

<div>
	<h2 class="font-bold">Scale Midi</h2>
	<input class="border-2 px-3 py-1 text-black" bind:value={keyName} />
	<DownloadKeyChordMidi {keyName} />

	{#if fullKey?.chords}
		<div class="flex gap-2">
			{#each fullKey.chords as chord}
				<span>{chord.name}</span>
			{/each}
		</div>
	{/if}
</div>
