<script lang="ts">
	import type { ReleaseMetadata } from '$lib/db/releases';
	import Vinyl from './Vinyl.svelte';

	export let artist = '';
	export let release = '';
	export let tracks = [''];
	export let releaseDate = '';
	export let links: ReleaseMetadata['links'];
</script>

<div class="@container">
	<div class="border dark:border-white border-black">
		<div class="@md:grid @md:grid-cols-2 @2xl:grid-cols-3">
			<div class="@md:col-span-1 @md:p-3 border-b border-black @md:border-none">
				<Vinyl class="@md:shadow-md" {artist} {release} />
			</div>
			<div class="px-4 py-3 @md:col-span-1 @2xl:col-span-2">
				<div class="mb-3 @2xl:col-span-full">
					<h2 class="text-2xl font-bold leading-none">{release}</h2>
					<h3 class="text-xl">{artist}</h3>
				</div>
				<div class="@md:col-span-1 @2xl:col-span-2 @2xl:grid @2xl:grid-cols-2">
					{#if tracks}
						<ul class="mb-3 @md:col-span-1">
							{#each tracks as track}
								<li class="list-inside list-decimal list-item">{track}</li>
							{/each}
						</ul>
					{/if}

					<div class="flex flex-col @md:col-span-1">
						<span class="font-bold uppercase">Released</span>
						<span>{releaseDate}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="border-t dark:border-white border-black">
			<div class="flex p-3 gap-3">
				{#if links}
					{#each Object.entries(links) as [title, url]}
						<a class="link" href={url}>{title}</a>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
