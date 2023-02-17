<script lang="ts">
	import type { ListCategory, ListItem } from '$lib/db/lists';

	export let item: ListItem;
	export let category: ListCategory;

	function getTitleKey(category: ListCategory): keyof ListItem {
		return category === 'songs' ? 'title' : 'release';
	}

	$: titleKey = getTitleKey(category);
</script>

<li class="hover:bg-slate-100">
	<div class="flex justify-between gap-10">
		<div>{item[titleKey]}</div>
		<div class="text-right">{item.artist}</div>
	</div>
</li>
