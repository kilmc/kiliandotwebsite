<script lang="ts">
	import { kebabCase } from 'lodash-es';

	export let artist = 'Alvvays';
	export let release = 'Blue Rev';

	$: slugArtist = kebabCase(artist);
	$: slugRelease = kebabCase(release);
</script>

<div class="aspect-square {$$restProps.class}">
	<img
		src="/images/media/release-{slugArtist}-{slugRelease}.jpg"
		alt="Album artwork for {release} by {artist}"
	/>
</div>
