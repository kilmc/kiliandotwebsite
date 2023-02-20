<script lang="ts">
	import { kebabCase } from 'lodash-es';

	export let artist = 'Alvvays';
	export let release = 'Blue Rev';

	$: slugArtist = kebabCase(artist);
	$: slugRelease = kebabCase(release);
</script>

<div class="item--vinyl small">
	<img src="/images/media/release-{slugArtist}-{slugRelease}.jpg" alt="Blue Rev Album Cover" />
	<slot />
</div>

<style lang="scss">
	.item--vinyl {
		box-shadow: 0px 2px 4px rgba(black, 0.1);
		aspect-ratio: 1/1;
	}

	.small {
		width: 10rem;
	}
</style>
