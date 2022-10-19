<script lang="ts">
	import type { PageData } from './$types';
	import { getChord } from '$lib/music-tools/chords/getChord';
	import { transposeNote } from '$lib/music-tools/notes/transpose';
	export let data: PageData;

	let value = 'C';
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<input class="text-black" bind:value />
<div class="flex h-96">
	<div class="text-7xl m-auto">
		<h1>{getChord(value).name}</h1>
		<p>{getChord(value).notes.join(' ')}</p>
	</div>
</div>

<!-- <div>
	<h2>C major</h2>
	<pre>{JSON.stringify(getKey('C major')?.chords, null, 2)}</pre>
</div>
<div>
	<h2>Eb dorian</h2>
	<pre>{JSON.stringify(getKey('Eb dorian')?.chords, null, 2)}</pre>
</div>

<div>
	<h2>B major</h2>
	<pre>{JSON.stringify(getKey('B major')?.notes, null, 2)}</pre>
</div> -->
