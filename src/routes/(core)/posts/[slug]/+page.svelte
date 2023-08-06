<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Post: {data.title}</title>
</svelte:head>

<div class="mb-20">
	<h1 class="dark:text-yellow-300 kdw-text-blue text-4xl font-black mb-2">{data.title}</h1>
	<div class="mb-8">{data.date}</div>
	<svelte:component this={data.content} />
</div>
