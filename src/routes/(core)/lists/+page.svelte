<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Lists</title>
</svelte:head>

{#if data.favourites.length > 0}
	<h2 class="font-bold mb-2">Favourites</h2>
	<ul class="mb-4">
		{#each data.favourites as { href, text }}
			<li class="list-disc list-inside">
				<a {href}>{text}</a>
			</li>
		{/each}
	</ul>
{/if}

{#if data.yearEnd.length > 0}
	<h2 class="font-bold mb-2 text-2xl uppercase">Year-end</h2>
	{#each data.yearEnd as [group, items]}
		<h3 class="">{group}</h3>
		<ul class="mb-4 flex gap-4">
			{#each items as { href, text }}
				<li class="text-xl underline dark:hover:bg-gray-800 inline-block mb-2 capitalize">
					<a {href}>{text}</a>
				</li>
			{/each}
		</ul>
	{/each}
{/if}
