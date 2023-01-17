<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Sitemap</h1>

<ul>
	{#each data.urls as url}
		<li>
			<a href={url}>{url}</a>
		</li>
	{/each}
</ul>
