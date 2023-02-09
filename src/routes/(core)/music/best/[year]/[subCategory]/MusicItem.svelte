<script lang="ts">
	import type { ListItem, ListSubCategory } from '$lib/db/lists';
	import { kebabCase } from 'lodash';

	export let item: ListItem;
	export let releaseType: ListSubCategory;
	export let showArtwork: boolean = false;

	function getTitleKey(releaseType: ListSubCategory): keyof ListItem {
		return releaseType === 'songs' ? 'title' : 'release';
	}

	$: titleKey = getTitleKey(releaseType);
	$: artworkFileName = kebabCase(`${item.artist}-${item.release}`) + '.jpg';
	$: altText = `Album artwork for ${item.release} by ${item.artist}`;
</script>

<li class="font-sans">
	{#if showArtwork}<img src={`/images/media/release-${artworkFileName}`} alt={altText} />{/if}
	<div class="font-bold">{item[titleKey]}</div>
	<div>{item.artist}</div>
</li>
