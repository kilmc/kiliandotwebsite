<script lang="ts">
	import type { PageData } from './$types';
	import Link from '$lib/components/Link.svelte';
	import RandomLink from './RandomLink.svelte';
	import Update from '$lib/components/Update.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Kilian Dot Website</title>
</svelte:head>

<div class="grid grid-cols-2 gap-x-16 p-5 sm:p-10 lg:p-20 font-mono max-w-6xl mx-auto">
	<aside class="col-span-full xs:col-span-1 flex gap-2">
		<a
			href="/"
			class="font-bold uppercase flex flex-col dark:text-yellow-300 text-blue-600 text-6xl leading-[0.8] xs:text-5xl mb-2 xs:mb-8"
		>
			<div>Kilian</div>
			<div>Dot</div>
			<div>Website</div>
		</a>
	</aside>
	<nav class="flex flex-col items-start col-span-full xs:col-span-1 text-2xl mb-6 xs:mb-0">
		<Link href="/lists">Lists</Link>
		<Link href="/projects">Projects</Link>
		<Link href="/music">Music</Link>
	</nav>
	<div class="mb-8 col-span-full md:col-span-1">
		<Update date={data.lastUpdate.metadata?.date || ''} content={data.lastUpdate.default} />
	</div>
	<div class="col-span-full md:col-span-1 flex flex-col">
		{#each data.randomItems as item}
			<RandomLink {...item} />
		{/each}
	</div>
</div>

<style lang="scss">
</style>
