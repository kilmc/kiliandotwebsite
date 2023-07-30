<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../../app.css';
	import { page } from '$app/stores';
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';

	import { currentTrack, showPlayer } from '$lib/stores/player';
	import { browser } from '$app/environment';
</script>

<div
	class="layout grid dark:bg-black dark:text-white p-5 sm:p-10 lg:p-20 font-mono mx-auto max-w-6xl min-h-full gap-8"
>
	<Header path={$page.url.pathname} />
	<main class="relative">
		<slot />
		{#if browser && $showPlayer}
			<div class="mt-10 sticky bottom-[-1px] left-5 right-5  sm:left-10 sm:right-10">
				{#key $currentTrack}
					<AudioPlayer {...$currentTrack} />
				{/key}
			</div>
		{/if}
	</main>
</div>

<style lang="scss">
	.layout {
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: min-content 1fr;

		@screen sm {
			grid-template-columns: min-content 1fr;
			grid-template-rows: min-content 1fr;
		}
	}
</style>
