<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Tools | Musical Keys</title>
</svelte:head>

{#each data.majorScaleGroups as [name, scaleInfo]}
	<div class="mb-10">
		<h2 class="font-bold text-xl mb-2">{name.toUpperCase()}</h2>
		<div class="flex flex-wrap gap-x-2 gap-y-1">
			{#each scaleInfo as { name, href, classes }}
				<a {href} class="{classes} px-2 rounded-md capitalize">
					{name}
				</a>
			{/each}
		</div>
	</div>
{/each}
