<script lang="ts">
	import type { Loosey } from '$lib/db/loosies';
	import { secondsToTimeString } from '$lib/helpers/secondsToTimeString';
	import type { PageData } from './$types';
	import { autoPlay, currentTrack, showPlayer } from '$lib/stores/player';
	import { onDestroy } from 'svelte';
	export let data: PageData;

	function handleTrackOnClick(track: Loosey) {
		$autoPlay = true;
		currentTrack.update(() => ({ fileName: track.fileName, title: track.title }));
	}

	function getDate(date: string) {
		return new Date(Date.parse(date)).toLocaleDateString('en-EN', {
			year: 'numeric',
			month: 'long'
		});
	}

	let filterValue = '';
	$: filterTerms = filterValue.split(',').map((x) => x.trim());

	$: filteredResults = data.loosies
		.filter((loosey) => {
			const matchTitle = filterTerms.some((term) =>
				loosey.title.toLowerCase().match(term.toLowerCase())
			);
			const matchTag = filterTerms.some((term) =>
				loosey.tags?.some((str) => str.toLowerCase().match(term.toLowerCase()))
			);

			return matchTitle || matchTag;
		})
		.sort((a, b) => Date.parse(b.date || '') - Date.parse(a.date || ''));
	$: $showPlayer = true;

	onDestroy(() => {
		$showPlayer = false;
		$autoPlay = false;
	});
</script>

<svelte:head>
	<title>Music: Sketchbook</title>
</svelte:head>

<div class="mb-10">
	<h2 class="font-bold uppercase text-2xl mb-3">Sketchbook</h2>
	<p>
		I have a lot of little bits and pieces of ideas that I've made of the years. Some of them might
		become full tracks, others will likely just stay as these snippets. I saw an Edward Hopper
		exhibit and was inspired by how heavily he used sketchbooks to plan out his finaly pieces and I
		feel like hiding this work and only showing finished songs furthers the idea that things just
		happen but often it takes a long time to develop these things and you also make a lot of silly
		little things along the way that may never go anywhere but that's ok.
	</p>
</div>

<input
	type="search"
	class="border-black border p-3 w-full text-xl mb-4 bg-white dark:bg-black dark:border-white dark:text-white"
	placeholder="Filter tracks"
	bind:value={filterValue}
/>

<ul>
	{#each filteredResults as loosey}
		<li
			class="border-bottom border-black/20 mb-6 md:mb-4 items-start gap-y-1 gap-x-4 grid grid-cols-[1fr_max-content] md:grid-cols-[1fr_max-content_max-content]"
		>
			<div class="col-span-1">
				<button class="link text-lg text-left" on:click={() => handleTrackOnClick(loosey)}>
					{loosey.title}
				</button>
			</div>
			<span class="col-span-1 md:order-1">
				{getDate(loosey.date || '')} /
				{secondsToTimeString(loosey.trackLength)}
			</span>
			{#if loosey.tags}
				<div class="flex justify-end gap-2 col-span-2 md:col-span-1">
					{#each loosey.tags as tag}
						<span class="dark:bg-gray-800 dark:text-white bxg-gray-200 text-black px-2">{tag}</span>
					{/each}
				</div>
			{/if}
		</li>
	{/each}
</ul>
