<script lang="ts">
	import SimpleList from '$lib/components/SimpleList.svelte';
	import TypewriterPage from '$lib/components/TypewriterPage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>List: {data.title}</title>
</svelte:head>

<TypewriterPage title={data.title}>
	<SimpleList list={data.list} />
</TypewriterPage>
