<script lang="ts">
	import type { Loosey } from '$lib/db/loosies';
	import { secondsToTimeString } from '$lib/helpers/secondsToTimeString';
	import AudioPlayer from '../AudioPlayer.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let currentTrack = data.loosies.at(0);

	function handleTrackOnClick(track: Loosey) {
		currentTrack = track;
	}

	let filterValue = '';
	$: filterTerms = filterValue.split(',').map((x) => x.trim());

	$: filteredResults = data.loosies.filter((loosey) => {
		const matchTitle = filterTerms.some((term) =>
			loosey.title.toLowerCase().match(term.toLowerCase())
		);
		const matchTag = filterTerms.some((term) =>
			loosey.tags?.some((str) => str.toLowerCase().match(term.toLowerCase()))
		);

		return matchTitle || matchTag;
	});
</script>

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

{#if currentTrack}
	<div class="mb-6">
		{#key currentTrack.fileName}
			<AudioPlayer
				fileName={currentTrack.fileName}
				title={currentTrack.title}
				description={currentTrack.description}
			/>
		{/key}
	</div>
{/if}

<input
	type="search"
	class="border-black border-b px-3 w-full text-xl mb-3"
	placeholder="Filter tracks"
	bind:value={filterValue}
/>

<ul>
	{#each filteredResults as loosey}
		<li class="border-bottom border-black/20 mb-3 odd:bg-black/5 py-4 px-4">
			<div>
				<div class="flex">
					<button class="link" on:dblclick={() => handleTrackOnClick(loosey)}>
						{loosey.title}
					</button>
					<span class="ml-auto">
						{secondsToTimeString(loosey.trackLength)}
					</span>
				</div>
				<div class="flex items-start gap-6">
					{#if loosey.description}
						<div>{loosey.description}</div>
					{/if}
					{#if loosey.tags}
						<div class="flex gap-2 ml-auto">
							{#each loosey.tags as tag}
								<span class="bg-black text-white px-2">{tag}</span>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</li>
	{/each}
</ul>

<div class="mt-20">
	<h3 class="font-bold">Copyright Notice:</h3>

	<p>
		All rights reserved for the content on this page. You may not use any of this audio without the
		express permission of the author, Kilian McMahon.
	</p>
</div>

<style lang="scss">
</style>
