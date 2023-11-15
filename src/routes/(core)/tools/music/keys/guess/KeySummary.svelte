<script lang="ts">
	import { convertKeyToURL } from '$lib/components/music/helpers';
	import type { Key } from '@kilmc/music-fns';

	export let key: Key;

	const hasAccidental = (note: string) => /b|#/.test(note);
	const accidentalClasses = 'bg-zinc-300 dark:bg-zinc-800';
</script>

<div
	class="grid grid-col-1 md:grid-cols-2 gap-y-4 items-center dark:md:odd:bg-slate-900 md:odd:bg-slate-100 md:p-2 mb-5 md:mb-0"
>
	<div>
		<a href={convertKeyToURL(key.name)} class="text-lg link">
			{key.name}
		</a>
	</div>
	<div class="grid grid-cols-7 gap-2">
		{#each key.notes as note}
			<div
				class="px-2 rounded-md text-center {hasAccidental(note.name)
					? accidentalClasses
					: 'dark:bg-zinc-900 bg-zinc-200'}"
			>
				{note.name}
			</div>
		{/each}
	</div>
</div>
