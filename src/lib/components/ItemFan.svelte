<script lang="ts">
	import Poster from './Poster.svelte';
	import type { PosterItem } from './types';

	export let posters: PosterItem[] = [];
</script>

<div class="layout">
	{#each posters as poster}
		<Poster {...poster} />
	{/each}
</div>

<style lang="scss">
	@use 'sass:math';

	@mixin fan($count, $angle) {
		@for $i from 1 through $count {
			:global(div:nth-child(#{$i})) {
				transform: translate(-50%, -50%)
					rotate(math.div(-$angle, 2) + math.div($angle, ($count + 1)) * $i);
			}
		}
	}

	.layout {
		aspect-ratio: 4 / 3;
		height: 100%;
		position: relative;

		@include fan(5, 50deg);

		:global(.poster) {
			height: 100%;
			aspect-ratio: 2/3;
			border-radius: 5px;
			position: absolute;
			box-shadow: 0 0 30px transparentize(black, 0.8);
			left: 50%;
			top: 50%;
			transform-origin: center 120%;
		}
	}
</style>
