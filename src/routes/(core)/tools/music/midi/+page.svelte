<script lang="ts">
	import { getChord, getKey } from '@kilmc/music-fns';
	import DownloadKeyChordMidi from '$lib/components/music/DownloadKeyChordMidi.svelte';
	import DownloadChordMidi from '$lib/components/music/DownloadChordMidi.svelte';
	let chordName = 'C';
	let keyName = 'C major';

	$: chord = getChord(chordName);
	$: fullKey = getKey(keyName);
</script>

<div class="mb-10">
	<h2 class="font-bold">Chord Midi</h2>
	<input class="border-2 px-3 py-1 text-black" bind:value={chordName} />
	{#if chord !== undefined}
		<DownloadChordMidi chordName={chord.name} />
		<div>
			{chord.notes.map((note) => note.name)}
		</div>
	{/if}
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
