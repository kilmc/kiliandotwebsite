<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../../app.css';
	import { page } from '$app/stores';
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';

	import { currentTrack, showPlayer } from '$lib/stores/player';
	import { browser } from '$app/environment';
	import Footer from '$lib/layout/Footer.svelte';
</script>

<div
	class="font-mono min-h-full grid grid-rows-[1fr_auto] grid-cols-[100%] max-w-4xl mx-auto p-5 sm:p-10 lg:py-20 lg:px-0"
>
	<div
		class="grid grid-cols-1 grid-rows-[min-content_1fr_auto] md:grid-cols-4 md:grid-rows-[1fr_auto] gap-8 md:gap-x-8 md:gap-y-32"
	>
		<Header class="col-span-1" path={$page.url.pathname} />
		<main class="relative col-span-1 md:col-span-3">
			<slot />
			{#if browser && $showPlayer}
				<div class="mt-10 sticky bottom-[-1px] left-5 right-5 sm:left-10 sm:right-10">
					{#key $currentTrack}
						<AudioPlayer {...$currentTrack} />
					{/key}
				</div>
			{/if}
		</main>
		<div class="col-span-1 md:col-start-2 md:col-span-3">
			<Footer />
		</div>
	</div>
</div>

<style lang="scss">
	:global(body) {
	}
</style>
