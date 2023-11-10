<script lang="ts">
	import type { ChordOption } from './types';

	export let sectionTitle: string;
	export let options: ChordOption[];
	export let updateFn: (input: string) => void;
	export let currentValue: string;
</script>

<div>
	<h4 class="mb-1">{sectionTitle}</h4>
	<div
		class="grid border dark:border-zinc-700 border-zinc-300 mb-4"
		style={`grid-template-columns: repeat(${options.length},1fr)`}
	>
		{#each options as option}
			<div class="text-center border-l first:border-l-0 dark:border-zinc-700 border-zinc-300">
				<button
					on:click={() => updateFn(option.value)}
					class:active={currentValue === option.value}
					class="dark:hover:bg-white/75 hover:bg-zinc-300 dark:hover:text-black h-full w-full px-2"
				>
					{option.label}
				</button>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.active {
		@apply bg-zinc-800 text-white dark:bg-white dark:text-black;
	}
</style>
