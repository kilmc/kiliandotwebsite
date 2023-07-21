<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Kilian | Projects</title>
</svelte:head>

<ul class="layout">
	{#each data.items as project}
		<li
			class="aspect-2/3 bg-zinc-200 hover:bg-zinc-300 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 hover:-translate-x-1"
		>
			<a
				href={project.href}
				class="w-full h-full flex font-bold uppercase text-center bg-cover"
				style="background-image: url('{project.poster}');"
			>
				<span class="m-auto sr-only">{project.text}</span>
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 1rem;
	}
</style>
