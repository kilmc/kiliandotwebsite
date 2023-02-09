<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Projects</h2>
<ul class="layout">
	{#each data.projects as project}
		<li class="aspect-3/4 bg-zinc-200 hover:bg-zinc-300">
			<a href={project.url} class="w-full h-full flex font-sans font-bold uppercase">
				<span class="m-auto">{project.name}</span>
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
