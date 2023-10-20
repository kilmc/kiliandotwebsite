<script lang="ts">
	import SubNavPortal from '$lib/portals/SubNavPortal.svelte';
	import { onMount } from 'svelte';
	import { convertKeyToURL } from '../../helpers';
	import HighlightPiano from '../../piano/HighlightPiano.svelte';
	import type { PageData } from './$types';
	import { getKey } from '@kilmc/music-fns';
	import DownloadKeyChordMidi from '$lib/components/music/DownloadKeyChordMidi.svelte';
	export let data: PageData;

	let key = data.keyName || 'C major';
	let keyInfo = getKey(key);
	const romanNumeralClasses = [
		'bg-red-300 dark:bg-red-600',
		'bg-orange-300 dark:bg-orange-600',
		'bg-yellow-300 dark:bg-yellow-500',
		'bg-green-300 dark:bg-green-600',
		'bg-blue-300 dark:bg-blue-600',
		'bg-indigo-300 dark:bg-indigo-600',
		'bg-violet-300 dark:bg-violet-600'
	];

	let highlightedNotes: string[];
	let isChordHighlighted = false;

	function setNotes(notes: string[]) {
		highlightedNotes = notes;
		isChordHighlighted = true;
	}

	function resetNotes() {
		highlightedNotes = keyInfo?.notes.names || [];
		isChordHighlighted = false;
	}

	onMount(() => {
		resetNotes();
	});
</script>

<svelte:head>
	<title>{key}</title>
</svelte:head>

<SubNavPortal>
	<a
		href="/tools/music/key/"
		class="font-mono font-bold text-xl uppercase dark:text-white text-black hover:text-gray-500 inline-block"
	>
		Scales
	</a>
</SubNavPortal>

{#if keyInfo !== undefined}
	<div class="mb-10">
		<h3 class="font-bold text-2xl">{key}</h3>
		<div class="flex gap-4 text-2xl">
			{#each keyInfo.notes.names as note}
				<div>{note}</div>
			{/each}
		</div>

		{#if /(major|ionian)/.test(keyInfo.name)}
			<a href={convertKeyToURL(keyInfo.minor.name)} data-sveltekit-reload>
				Relative: {keyInfo.minor.name}
			</a>
		{/if}
	</div>

	<div class="border-2 border-black dark:border-white mb-14">
		{#if keyInfo}
			<div class="dark:bg-white bg-black grid grid-cols-7 text-xl gap-x-[2px]">
				{#each [2, 1, 0] as num}
					{#each keyInfo.chords as chord}
						<div class="dark:bg-black dark:text-white bg-white text-center py-2">
							{chord.notes[num]}
						</div>
					{/each}
				{/each}
				{#each keyInfo.chords as { name, notes }}
					<div
						class="font-bold dark:bg-black dark:text-white dark:border-white bg-white text-center py-2 border-y-2 border-black"
					>
						<button on:click={() => setNotes(notes)}>
							{name}
						</button>
					</div>
				{/each}
				{#each keyInfo.chords as { romanNumeral }, index}
					<div class="{romanNumeralClasses[index]} text-center py-2">{romanNumeral}</div>
				{/each}
			</div>
		{/if}
	</div>

	{#key highlightedNotes}
		<div>
			<HighlightPiano notes={highlightedNotes} />
			{#if isChordHighlighted}
				<div>
					<button on:click={() => resetNotes()}>Reset</button>
				</div>
			{/if}
		</div>
	{/key}

	<div class="mt-10">
		<DownloadKeyChordMidi keyName={key} />
	</div>
{:else}
	Could note find {key}
{/if}
