<script lang="ts">
	import { convertKeyToURL } from './helpers';

	export let scale: string[];
	let majorKey = `${scale.at(0)} major`;

	const hasAccidental = (note: string) => /b|#/.test(note);
	const accidentalClasses = 'bg-slate-300 dark:bg-slate-800';
</script>

<div class="grid grid-cols-2 items-center dark:odd:bg-slate-900 odd:bg-slate-100 p-2">
	<div>
		<a href={convertKeyToURL(majorKey)} class="text-lg link">
			{majorKey}
		</a>
	</div>
	<div class="grid grid-cols-7 gap-2">
		{#each scale as note}
			<div class="px-2 rounded-md {hasAccidental(note) ? accidentalClasses : undefined}">
				{note}
			</div>
		{/each}
	</div>
</div>
