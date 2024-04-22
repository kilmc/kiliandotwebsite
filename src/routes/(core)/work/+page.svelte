<script lang="ts">
	import type { PageData } from './$types';

	const getJobCategory = (jobTitle: string) => {
		switch (jobTitle) {
			case 'Software Engineer':
			case 'Senior Software Engineer':
				return 'engineering';
			case 'Product Designer':
				return 'hybrid';
			case 'Production Designer':
			case 'Art Director':
				return 'design';
			default:
				break;
		}
	};

	const getBgColor = (jobTitle: string) => {
		const colorMap = {
			engineering: 'bg-blue-200',
			hybrid: 'bg-gradient-to-l from-blue-200 to-red-200',
			design: 'bg-red-200'
		};

		return colorMap[getJobCategory(jobTitle) || 'design'];
	};

	export let data: PageData;
</script>

<svelte:head>
	<title>Jobs</title>
</svelte:head>

<ul class="layout">
	{#each data.grouped as [company, jobs]}
		<li class="mb-10">
			<div class="flex mb-3">
				<h3 class="font-bold text-lg">{company.name}</h3>
				<div class="ml-auto">{company.years}</div>
			</div>

			<div>
				{#each jobs as job}
					<a
						href={job.url}
						class="mb-4 block {getBgColor(job.role || '')} rounded-md p-4 shadow-md"
					>
						{#if job.title}<div class="font-bold text-lg">{job.title}</div>{/if}
						<div class="text-xl">{job.role}</div>
						<div>{job.timeSpan}</div>
					</a>
				{/each}
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	.layout {
		gap: 1rem;
	}
</style>
