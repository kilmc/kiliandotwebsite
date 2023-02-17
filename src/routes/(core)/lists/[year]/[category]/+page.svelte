<script lang="ts">
	import type { PageData } from './$types';
	import ListItem from './ListItem.svelte';

	export let data: PageData;
</script>

<div class="flex">
	<div class="font-mono text-lg bg-cream-100 px-20 pt-20 pb-60  mx-auto">
		<h2 class="underline underline-offset-4 uppercase mb-20 text-center">{data.title}</h2>
		<ol class="list-decimal list-inside">
			{#each data.list.items as item}
				<ListItem {item} category={data.list.category} />
			{/each}
		</ol>
	</div>
</div>

<style lang="scss">
</style>
