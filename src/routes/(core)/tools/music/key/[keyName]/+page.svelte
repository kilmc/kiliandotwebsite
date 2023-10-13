<script lang="ts">
	import { convertKeyToURL } from '../../helpers';
	import type { PageData } from './$types';
	import { getKey } from '@kilmc/music-fns';
	export let data: PageData;

	const key = data.keyName || 'C major';
	const keyInfo = getKey(key);
	const romanNumeralClasses = [
		'bg-red-300 dark:bg-red-600',
		'bg-orange-300 dark:bg-orange-600',
		'bg-yellow-300 dark:bg-yellow-500',
		'bg-green-300 dark:bg-green-600',
		'bg-blue-300 dark:bg-blue-600',
		'bg-indigo-300 dark:bg-indigo-600',
		'bg-violet-300 dark:bg-violet-600'
	];
</script>

{#if keyInfo !== undefined}
	<div>
		<h3 class="font-bold text-2xl">{key}</h3>
		<div class="flex gap-4 text-2xl mb-10">
			{#each keyInfo.notes.names as note}
				<div>{note}</div>
			{/each}
		</div>

		{#if !/minor/.test(keyInfo.name)}
			<a href={convertKeyToURL(keyInfo.minor.name)} data-sveltekit-reload>
				Relative: {keyInfo.minor.name}
			</a>
		{/if}
	</div>

	<h3 class="mb-2">Chords</h3>

	<div class="border-2 border-black dark:border-white mb-4">
		{#if keyInfo}
			<div class="dark:bg-white bg-black grid grid-cols-7 text-xl gap-x-[2px]">
				{#each [2, 1, 0] as num}
					{#each keyInfo.chords as chord}
						<div class="dark:bg-black dark:text-white bg-white text-center py-2">
							{chord.notes[num]}
						</div>
					{/each}
				{/each}
				{#each keyInfo.chords as { name }}
					<div
						class="font-bold dark:bg-black dark:text-white dark:border-white bg-white text-center py-2 border-y-2 border-black"
					>
						{name}
					</div>
				{/each}
				{#each keyInfo.chords as { romanNumeral }, index}
					<div class="{romanNumeralClasses[index]} text-center py-2">{romanNumeral}</div>
				{/each}
			</div>
		{/if}
	</div>
{:else}
	Could note find {key}
{/if}
