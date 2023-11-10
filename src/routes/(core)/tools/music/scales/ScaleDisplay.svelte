<script lang="ts">
	export let notes: string[] | undefined;
	export let name: string | undefined;
</script>

<div
	class="dark:bg-zinc-900 bg-zinc-200 rounded-lg py-6 px-6 @md:py-7 @md:px-9 @xl:py-10 @xl:px-12"
>
	{#if notes !== undefined && name !== undefined}
		<div class="flex justify-between gap-1">
			{#if notes}
				{#each notes as note}
					<div class="text-2xl @xl:text-4xl @2xl:text-5xl @5xl:text-7xl @7xl:text-8xl">{note}</div>
				{/each}
			{/if}
		</div>
		<div class="mt-6 text-xl">{name}</div>
	{/if}
</div>
