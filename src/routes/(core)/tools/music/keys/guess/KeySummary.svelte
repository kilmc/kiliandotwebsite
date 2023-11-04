<script lang="ts">
	import { convertKeyToURL } from '$lib/components/music/helpers';
	import type { Key } from '@kilmc/music-fns';

	export let key: Key;

	const hasAccidental = (note: string) => /b|#/.test(note);
	const accidentalClasses = 'bg-slate-300 dark:bg-slate-800';
</script>

<div class="grid grid-cols-2 items-center dark:odd:bg-slate-900 odd:bg-slate-100 p-2">
	<div>
		<a href={convertKeyToURL(key.name)} class="text-lg link">
			{key.name}
		</a>
	</div>
	<div class="grid grid-cols-7 gap-2">
		{#each key.notes as note}
			<div class="px-2 rounded-md {hasAccidental(note.name) ? accidentalClasses : undefined}">
				{note.name}
			</div>
		{/each}
	</div>
</div>
