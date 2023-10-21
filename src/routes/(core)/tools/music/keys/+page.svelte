<script lang="ts">
	import { scales } from '@kilmc/music-fns';
	import { convertKeyToURL } from '$lib/components/music/helpers';

	const scaleGroups = Object.entries(scales).map<[string, string[]]>(([scaleType, scaleInfo]) => {
		return [scaleType, Object.keys(scaleInfo)];
	});

	const romanNumeralClasses = [
		'bg-red-100 dark:bg-red-200 dark:text-red-900',
		'bg-orange-100 dark:bg-orange-200 dark:text-orange-900',
		'bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-900',
		'bg-green-100 dark:bg-green-200 dark:text-green-900',
		'bg-blue-100 dark:bg-blue-200 dark:text-blue-900',
		'bg-indigo-100 dark:bg-indigo-200 dark:text-indigo-900',
		'bg-violet-100 dark:bg-violet-200 dark:text-violet-900'
	];
</script>

{#each scaleGroups as [name, scaleNames], index}
	<div class="mb-10">
		<h2 class="font-bold text-xl mb-2">{name.toUpperCase()}</h2>
		<div class="flex flex-wrap gap-x-2 gap-y-1">
			{#each scaleNames as note}
				<a
					href={convertKeyToURL(`${note} ${name}`)}
					class="{romanNumeralClasses[index]} px-2 rounded-md capitalize">{note} {name}</a
				>
			{/each}
		</div>
	</div>
{/each}
