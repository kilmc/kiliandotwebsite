<script lang="ts">
	import Update from '$lib/components/Update.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Updates</title>
</svelte:head>

<div class="flex flex-col gap-10">
	{#each data.updates as [_, update]}
		<Update date={update.metadata?.date || ''} content={update.default} />
	{/each}
</div>
