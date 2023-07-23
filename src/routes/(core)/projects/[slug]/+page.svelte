<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article>
	<h2 class="font-bold text-2xl uppercase">{data.title}</h2>
	{#if data.linkURL}
		<a class="dark:text-gray-400" href={data.linkURL}>{data.linkTitle}</a>
	{/if}

	<div class="mt-4">
		<svelte:component this={data.content} />
	</div>
</article>
