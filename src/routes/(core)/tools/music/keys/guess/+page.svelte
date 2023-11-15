<script lang="ts">
	import { getKey, guessKey } from '@kilmc/music-fns';
	import KeySummary from './KeySummary.svelte';
	import Piano from '$lib/components/music/piano/ScaleGuesserPiano.svelte';
	import { pianoKeyModes, type PianoKeyMode } from '$lib/components/music/piano/types';
	import { inScale, outScale } from '$lib/stores/store';

	let selectedMode: PianoKeyMode = 'filter';

	$: guessedScales = guessKey($inScale, $outScale);
	$: singleResult =
		guessedScales.length === 1
			? getKey(guessedScales[0])
					?.relativeModes?.map((mode) => getKey(mode))
					.filter(Boolean)
			: undefined;
</script>

<svelte:head>
	<title>Tools | Key Guesser</title>
</svelte:head>

<h2 class="text-2xl font-bold uppercase mb-4">Key Guesser</h2>

<div class="mb-10">
	<div class="flex mb-2">
		<div class="ml-auto flex gap-2 items-center">
			{#each pianoKeyModes as mode}
				<label
					class="hover:bg-black/30 dark:hover:bg-white/30 text-center px-2"
					class:selected={selectedMode === mode}
				>
					<input type="radio" name="mode" value={mode} bind:group={selectedMode} class="hidden" />
					{mode}
				</label>
			{/each}
		</div>
	</div>

	<div class="overflow-scroll">
		<div class="min-w-[30rem]">
			<Piano mode={selectedMode} />
		</div>
	</div>
</div>

{#if guessedScales.length === 1 && singleResult !== undefined}
	<h3 class="font-bold text-lg mb-4">Modes of {singleResult.at(0)?.name}</h3>

	{#each singleResult as key}
		<KeySummary {key} />
	{/each}
{:else if guessedScales.length > 0 && guessedScales.length < 10}
	<h3 class="font-bold text-lg mb-4">Possible Root Keys</h3>
	<div class="flex flex-col">
		{#each guessedScales.map((scaleName) => getKey(scaleName)) as key (key?.name)}
			{#if key?.notes}
				<KeySummary {key} />
			{/if}
		{/each}
	</div>
{:else if $inScale.length === 0 && $outScale.length === 0}
	<div>Press some keys on the piano to start guessing</div>
{:else if guessedScales.length > 10}
	<div>Need more info</div>
{:else}
	None of the above {guessedScales.length}
{/if}

<style lang="scss">
	.selected {
		@apply bg-black text-white dark:bg-white dark:text-black dark:hover:bg-white/80;
	}
</style>
