<script lang="ts">
	import type { ListItem } from '$lib/db/lists';

	export let index: number;
	export let item: ListItem;
	export let primaryKey: keyof ListItem;
	export let secondaryKey: keyof ListItem;
</script>

<div class="col-span-1">{index}.</div>
<div class="col-span-2 font-bold xs:font-normal xs:col-span-1">{item[primaryKey]}</div>
<div class="col-start-2 col-span-2 mb-3 xs:mb-0 xs:col-span-1 xs:text-right">
	{item[secondaryKey]}
</div>
