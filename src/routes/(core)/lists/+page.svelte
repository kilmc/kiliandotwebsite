<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.favourites.length > 0}
	<h2 class="font-bold border-b border-gray-300 mb-2">Favourites</h2>
	<ul class="mb-4">
		{#each data.favourites as { href, text }}
			<li class="list-disc list-inside">
				<a {href}>{text}</a>
			</li>
		{/each}
	</ul>
{/if}

<h2 class="font-bold border-b border-gray-300 mb-2">Year-end</h2>
{#each data.yearEnd as [group, items]}
	<h3>{group}</h3>
	<ul class="mb-4">
		{#each items as { href, text }}
			<li class="list-disc list-inside"><a {href}>{text}</a></li>
		{/each}
	</ul>
{/each}
