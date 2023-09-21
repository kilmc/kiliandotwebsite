<script lang="ts">
	import { accidentalToWord } from './piano/helpers';

	export let scale: string[];
	let majorKey = scale.at(0);

	const hasAccidental = (note: string) => /b|#/.test(note);
	const accidentalClasses = 'bg-slate-300 dark:bg-slate-800';

	const convertKeyToURL = (note: string | undefined) => {
		const defaultURL = '/tools/music/key/c-major';

		if (note === undefined) return;

		const match = note.match(/([A-G])([#b])?/)?.slice(1, 3);

		if (match === undefined) return;

		const pitch = match[0];
		const accidental = accidentalToWord(match[1]);

		if (match) {
			return `/tools/music/key/${pitch.toLowerCase()}${accidental ? '-' + accidental : ''}-major`;
		} else {
			return defaultURL;
		}
	};
</script>

<div class="grid grid-cols-2 items-center dark:odd:bg-slate-900 odd:bg-slate-100 p-2">
	<div>
		<a href={convertKeyToURL(majorKey)} class="text-lg link">
			{majorKey} major
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
