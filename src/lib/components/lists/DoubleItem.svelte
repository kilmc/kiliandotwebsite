<script lang="ts">
	import type { ListItem } from '$lib/db/lists';

	export let index: number;
	export let item: ListItem;
	export let primaryKey: keyof ListItem;
	export let secondaryKey: keyof ListItem;
	console.log();
</script>

<div>{index}.</div>
<div>{item[primaryKey]}</div>
<div class="text-right">{item[secondaryKey]}</div>
