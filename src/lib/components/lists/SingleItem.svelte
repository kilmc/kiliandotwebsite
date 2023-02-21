<script lang="ts">
	import type { ListItem } from '$lib/db/lists';

	export let index: number;
	export let item: ListItem;
	export let primaryKey: keyof ListItem;
</script>

<div>{index}.</div>
<div>{item[primaryKey]}</div>
