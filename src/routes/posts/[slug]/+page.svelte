<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<h1 class="text-blue-500 italic text-4xl font-black">{data.title}</h1>

	<svelte:component this={data.content} />
</div>
