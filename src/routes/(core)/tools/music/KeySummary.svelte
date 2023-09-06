<script lang="ts">
	export let scale: string[];
	let majorKey = scale.at(0);

	const hasAccidental = (note: string) => /b|#/.test(note);
</script>

<div class="grid grid-cols-2 items-center odd:bg-slate-100 p-2">
	<div class="text-lg">{majorKey} major</div>
	<div class="grid grid-cols-7 gap-2">
		{#each scale as note}
			<div class="px-2 rounded-md" class:bg-slate-300={hasAccidental(note)}>
				{note}
			</div>
		{/each}
	</div>
</div>
