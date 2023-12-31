<script lang="ts">
	import type { PageData } from './$types';
	import Update from '$lib/components/Update.svelte';
	import Footer from '$lib/layout/Footer.svelte';
	import HeavyRotation from '$lib/components/HeavyRotation.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Kilian Dot Website</title>
</svelte:head>

<div class="grid grid-cols-2 auto-rows-min gap-8 lg:gap-16">
	<aside class="col-span-full xs:col-span-1 flex gap-2">
		<a
			href="/"
			class="font-bold uppercase flex flex-col dark:text-yellow-300 text-blue-600 text-6xl leading-[0.8] xs:text-5xl"
		>
			<div>Kilian</div>
			<div>Dot</div>
			<div>Website</div>
		</a>
	</aside>
	<nav class="flex flex-col items-start col-span-full xs:col-span-1 text-2xl gap-2 mb-8 xs:mb-0">
		<a class="link" href="/lists">Lists</a>
		<a class="link" href="/projects">Projects</a>
		<a class="link" href="/music">Music</a>
	</nav>
	<div class="col-span-full md:col-span-1">
		<Update date={data.lastUpdate.metadata?.date || ''} content={data.lastUpdate.default} />
	</div>
	<div class="col-span-full md:col-span-1 flex flex-col">
		<div class="mb-10">
			{#each data.randomItems as item}
				<a class="mb-6 last-of-type:mb-0 flex flex-col items-start" href={item.url}>
					<span class="uppercase text-sm font-bold mb-0 inline-block">{item.type}</span>
					<span class="link text-2xl inline-block">{item.title}</span>
				</a>
			{/each}
		</div>

		{#if data.heavyRotation}
			<HeavyRotation {...data.heavyRotation} />
		{/if}
	</div>
</div>
<Footer />
