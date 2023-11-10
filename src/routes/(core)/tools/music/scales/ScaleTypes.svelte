<script lang="ts">
	export let label: string;
	export let names: string[];
	export let currentName: string;
	export let onUpdate: (name: string) => void;
</script>

<details class="border border-b-0 dark:border-zinc-600 border-zinc-300 w-full px-4 py-2">
	<summary class="cursor-pointer">{label}</summary>
	<div class="flex flex-wrap gap-2 my-1">
		{#each names as name}
			<button
				class="dark:bg-zinc-900 dark:hover:bg-zinc-700 bg-zinc-100 hover:bg-zinc-300 text-black px-2 py-1 rounded"
				on:click={() => onUpdate(name)}
				class:active={currentName === name}
			>
				{name}
			</button>
		{/each}
	</div>
</details>

<style lang="scss">
	.active {
		@apply bg-zinc-800 text-white dark:bg-white dark:text-black;
	}
</style>
