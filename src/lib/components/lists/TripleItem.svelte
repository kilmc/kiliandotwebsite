<script lang="ts">
	import type { ListItem } from '$lib/db/lists';

	export let index: number;
	export let item: ListItem;
	export let primaryKey: keyof ListItem;
	export let secondaryKey: keyof ListItem;
	export let tertiaryKey: keyof ListItem;
</script>

<div class="col-span-1">{index}.</div>
<div class="col-span-2 xs:font-normal xs:col-span-1">
	<div class="font-bold">{item[primaryKey]}</div>
	<div>{item[secondaryKey]}</div>
</div>
<div class="col-start-2 col-span-2 mb-3 xs:mb-0 xs:col-span-1 xs:text-right">
	{item[tertiaryKey]}
</div>
