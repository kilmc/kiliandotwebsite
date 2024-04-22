<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	{#if data.title}
		<title>Work: {data.title}</title>
	{:else}
		<title>Work: {data.company}</title>
	{/if}
</svelte:head>

<article>
	<div class="mb-10 grid grid-cols-[1fr_7rem] gap-20">
		<div>
			<div class="mb-3">
				<h4 class="text-base">Company</h4>
				<div class="text-xl font-bold">
					{#if data.title}
						{data.title}
					{:else}
						{data.company}
					{/if}
				</div>
			</div>

			<div class="mb-3">
				<h4 class="text-base">Role</h4>
				<div class="text-xl font-bold">{data.role}</div>
			</div>
			<div class="mb-3">
				<h4 class="text-base">When</h4>
				<div class="text-xl font-bold">{data.timeSpan}</div>
			</div>

			<div>
				<h4 class="text-base">Skills</h4>
				<div class="text-xl capitalize font-bold">{data.skills?.join(', ')}</div>
			</div>
		</div>
		<img src={data.poster} alt={data.company} class="aspect-2/3" />

		{#if data.linkURL}
			<a class="dark:text-gray-400" href={data.linkURL}>{data.linkTitle}</a>
		{/if}
	</div>
	<div class="mt-4">
		<svelte:component this={data.content} />
	</div>
</article>
