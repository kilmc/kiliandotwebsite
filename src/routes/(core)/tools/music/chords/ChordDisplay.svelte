<script lang="ts">
	import Download from '$lib/components/icons/Download.svelte';
	import DownloadChordMidi from '$lib/components/music/DownloadChordMidi.svelte';
	import type { Note } from '@kilmc/music-fns';

	const chordNameClasses: Record<number, string> = {
		1: 'text-[8em]',
		2: 'text-[8em]',
		3: 'text-[6em]',
		4: 'text-[6em]',
		5: 'text-[5em]',
		6: 'text-[5em]',
		7: 'text-[4.5em]',
		8: 'text-[4em]',
		9: 'text-[3em]',
		10: 'text-[3em]',
		11: 'text-[3em]'
	};

	export let name: string | undefined;
	export let notes: Note[] | undefined;

	$: nameLength = name !== undefined ? name.length : 1;

	$: chordClasses =
		chordNameClasses[nameLength] !== undefined ? chordNameClasses[nameLength] : 'text-4xl';
</script>

<div
	class="relative rounded-lg bg-zinc-200 dark:bg-zinc-900 p-4 @md:p-6 grid grid-col-1 grid-rows-[1fr_auto] gap-2 text-md @xl:text-2xl @4xl:text-4xl"
>
	{#if name !== undefined && notes !== undefined}
		<div class="flex items-center justify-center">
			<div class="{chordClasses} leading-normal">{name}</div>
		</div>
		<div class="flex justify-between items-center flex-none mt-auto">
			<div class="text-xl @md:text-2xl">{notes.map((note) => note.name).join(' ')}</div>

			<DownloadChordMidi chordName={name}>
				<div class="rounded-sm p-1 dark:hover:bg-zinc-600 hover:bg-zinc-700 hover:text-white">
					<span class="sr-only">Download</span>
					<Download />
				</div>
			</DownloadChordMidi>
		</div>
	{:else}
		<div>Note Found</div>
	{/if}
</div>
