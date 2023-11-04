<script lang="ts">
	import SubNavPortal from '$lib/portals/SubNavPortal.svelte';
	import { onMount } from 'svelte';
	import HighlightPiano from '$lib/components/music/piano/HighlightPiano.svelte';
	import type { PageData } from './$types';
	import type { Note } from '@kilmc/music-fns';
	import DownloadKeyChordMidi from '$lib/components/music/DownloadKeyChordMidi.svelte';

	export let data: PageData;

	const romanNumeralClasses = [
		'bg-red-300 dark:bg-red-600',
		'bg-orange-300 dark:bg-orange-600',
		'bg-yellow-300 dark:bg-yellow-500',
		'bg-green-300 dark:bg-green-600',
		'bg-blue-300 dark:bg-blue-600',
		'bg-indigo-300 dark:bg-indigo-600',
		'bg-violet-300 dark:bg-violet-600'
	];

	$: highlightedNotes = data.notes;
	$: isChordHighlighted = false;

	function setNotes(notes: Note[]) {
		highlightedNotes = notes;
		isChordHighlighted = true;
	}

	function resetNotes() {
		highlightedNotes = data?.notes || [];
		isChordHighlighted = false;
	}

	onMount(() => {
		resetNotes();
	});
</script>

<svelte:head>
	<title>{data.name}</title>
</svelte:head>

<SubNavPortal>
	<a
		href="/tools/music/keys/"
		class="font-mono font-bold text-xl uppercase dark:text-white text-black hover:text-gray-500 inline-block"
	>
		Scales
	</a>
</SubNavPortal>

{#if data.name !== undefined}
	<div class="mb-10">
		<h3 class="font-bold text-2xl">{data.name}</h3>
		<div class="flex gap-4 text-2xl">
			{#if data.relativeModes}
				{#each data.relativeModes as mode}
					<a href={mode.href}>
						{mode.name}
					</a>
				{/each}
			{/if}
		</div>
	</div>

	<div class="overflow-scroll">
		<div class="border-2 border-black dark:border-white mb-14 min-w-[28rem]">
			{#if data}
				<div class="dark:bg-white bg-black grid grid-cols-7 text-xl gap-x-[2px]">
					{#each [2, 1, 0] as num}
						{#each data.chords as chord}
							<div class="dark:bg-black dark:text-white bg-white text-center py-2">
								{#if chord.notes[num]}
									{chord.notes[num].name}
								{/if}
							</div>
						{/each}
					{/each}
					{#each data.chords as { name, notes }}
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
					{#each data.chords as { romanNumeral }, index}
						<div class="{romanNumeralClasses[index]} text-center py-2">{romanNumeral}</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	{#key highlightedNotes}
		<div class="overflow-scroll mb-10">
			<HighlightPiano notes={highlightedNotes} />
			{#if isChordHighlighted}
				<div>
					<button on:click={() => resetNotes()}>Reset</button>
				</div>
			{/if}
		</div>
	{/key}

	<div class="mb-10">
		<DownloadKeyChordMidi keyName={data.name} />
	</div>

	<div class="flex flex-col gap-1 items-start">
		<h2>Parallel modes:</h2>
		{#if data.parallelModes}
			{#each data.parallelModes as item}
				<a class="link" href={item.href}>
					{item.name}
				</a>
			{/each}
		{/if}
	</div>
{/if}
