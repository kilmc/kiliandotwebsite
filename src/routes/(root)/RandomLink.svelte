<script>
	import Link from '$lib/components/Link.svelte';
	import ItemLabel from './ItemLabel.svelte';

	export let url = '';
	export let type = '';
	export let title = '';
</script>

<a class="mb-6 flex flex-col items-start" href={url}>
	<ItemLabel>{type}</ItemLabel>
	<Link class="text-2xl inline-block">{title}</Link>
</a>
