<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Vinyl from '$lib/components/Vinyl.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="grid layout grid-cols-3 gap-6">
	<div class="col-span-full border dark:border-white border-black gap-4">
		<div class="grid grid-cols-3 gap-8 p-4">
			<Vinyl class="col-span-3 xs:col-span-1" artist={data.artist} release={data.release} />
			<div class="col-span-3 xs:col-span-2">
				<h2 class="text-xl font-bold">{data.release}</h2>
				<h3 class="mb-4">{data.artist}</h3>
				{#if data.tracks}
					<ul>
						{#each data.tracks as track}
							<ol class="list-inside list-decimal list-item">{track}</ol>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
		<div class="col-span-full border-t dark:border-white border-black p-4">
			<div class="flex gap-4">
				{#if data.links}
					{#each Object.entries(data.links) as [title, href]}
						<Link {href}>{title}</Link>
					{/each}
				{/if}
			</div>
		</div>
	</div>

	<div class="col-span-full">
		<svelte:component this={data.content} />
	</div>
</div>

<style lang="scss">
</style>
