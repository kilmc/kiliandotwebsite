<script lang="ts">
	import SubNavPortal from '$lib/portals/SubNavPortal.svelte';
	import { onMount } from 'svelte';
	import { convertKeyToURL } from '$lib/components/music/helpers';
	import HighlightPiano from '$lib/components/music/piano/HighlightPiano.svelte';
	import type { PageData } from './$types';
	import { extractScaleName, getKey } from '@kilmc/music-fns';
	import DownloadKeyChordMidi from '$lib/components/music/DownloadKeyChordMidi.svelte';
	import { offsetArr } from '$lib/helpers/array';
	export let data: PageData;

	let key = data.keyName || 'C major';
	let keyInfo = getKey(key);
	let modeName = extractScaleName(key)?.at(1) || '';

	const romanNumeralClasses = [
		'bg-red-300 dark:bg-red-600',
		'bg-orange-300 dark:bg-orange-600',
		'bg-yellow-300 dark:bg-yellow-500',
		'bg-green-300 dark:bg-green-600',
		'bg-blue-300 dark:bg-blue-600',
		'bg-indigo-300 dark:bg-indigo-600',
		'bg-violet-300 dark:bg-violet-600'
	];

	export const modes = ['major', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'minor', 'locrian'];

	let highlightedNotes: string[];
	let isChordHighlighted = false;
	let offsetModes = offsetArr(modes, modes.indexOf(modeName));

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
		href="/tools/music/keys/"
		class="font-mono font-bold text-xl uppercase dark:text-white text-black hover:text-gray-500 inline-block"
	>
		Scales
	</a>
</SubNavPortal>

{#if keyInfo !== undefined}
	<div class="mb-10">
		<h3 class="font-bold text-2xl">{key}</h3>
		<div class="flex gap-4 text-2xl">
			{#each keyInfo.notes.names as note, index}
				<a href={convertKeyToURL(`${note} ${offsetModes[index]}`)} data-sveltekit-reload>
					{note}
				</a>
			{/each}
		</div>
	</div>

	<div class="overflow-scroll">
		<div class="border-2 border-black dark:border-white mb-14 min-w-[28rem]">
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
							class="font-bold dark:bg-black dark:text-white dark:border-white bg-white text-center px-2 py-2 border-y-2 border-black"
						>
							<button
								class="dark:hover:bg-white/20 hover:bg-black/20 w-full h-full rounded-sm"
								on:click={() => setNotes(notes)}
							>
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
	</div>

	{#key highlightedNotes}
		<div class="overflow-scroll">
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
