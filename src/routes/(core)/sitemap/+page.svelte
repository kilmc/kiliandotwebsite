<script lang="ts">
	import type { PageData } from './$types';
	import { base, assets } from '$app/paths';

	export let data: PageData;
	console.log('base', base);
	console.log({ assets });
</script>

<h1>Sitemap</h1>

<ul>
	{#each data.urls as url}
		<li>
			<a href={url}>{url}</a>
		</li>
	{/each}
</ul>
