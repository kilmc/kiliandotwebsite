<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Kilian | Projects</title>
</svelte:head>

<h2>Projects</h2>
<ul class="layout">
	{#each data.items as project}
		<li class="aspect-3/4 bg-zinc-200 hover:bg-zinc-300">
			<a href={project.href} class="w-full h-full flex font-bold uppercase">
				<span class="m-auto">{project.text}</span>
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
