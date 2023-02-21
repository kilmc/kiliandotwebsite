<script lang="ts">
	import type { ListCategory, ListItem } from '$lib/db/lists';

	export let index: number;
	export let item: ListItem;
	export let category: ListCategory;

	function getTitleKey(category: ListCategory): keyof ListItem {
		return category === 'songs' ? 'title' : 'release';
	}

	$: titleKey = getTitleKey(category);
</script>

<li class="hover:bg-slate-100 contents">
	<div class="flex-shrink">{index}.</div>
	<div>{item[titleKey]}</div>
	<div class="text-right self-end">{item.artist}</div>
</li>
