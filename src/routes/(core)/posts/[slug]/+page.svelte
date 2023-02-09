<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Kilian | Post: {data.title}</title>
</svelte:head>

<div>
	<div class="text-center italic">Post</div>
	<h1 class="kdw-text-blue italic text-4xl font-black mb-8">{data.title}</h1>
	<div>{data.date}</div>
	<svelte:component this={data.content} />
</div>
