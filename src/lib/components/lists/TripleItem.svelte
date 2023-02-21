<script lang="ts">
	import type { ListItem } from '$lib/db/lists';

	export let index: number;
	export let item: ListItem;
	export let primaryKey: keyof ListItem;
	export let secondaryKey: keyof ListItem;
	export let tertiaryKey: keyof ListItem;
</script>

<div>{index}.</div>
<div>
	<div class="font-bold">{item[primaryKey]}</div>
	<div>{item[secondaryKey]}</div>
</div>
<div class="text-right">{item[tertiaryKey]}</div>
