<script lang="ts">
	import { SIDEBAR_ID } from '$lib/portals/consts';
	import { startCase } from 'lodash-es';

	export let path: string;

	const generateUrlList = (path: string) => {
		const homeItem = { title: 'kilian.website', url: '/' };
		const fullPath = path
			.split('/')
			.filter((dir) => dir.length !== 0)
			.slice(0, 1);

		const pathItems = fullPath.map((dir, i) => {
			const title = startCase(dir);
			const url = `/${fullPath.slice(0, i + 1).join('/')}/`;

			return {
				title,
				url
			};
		});

		return [homeItem].concat(pathItems);
	};
	$: linkGroups = generateUrlList(path);
</script>

<header class={$$restProps.class}>
	<nav class="sticky top-5 sm:top-10 lg:top-20">
		{#each linkGroups as linkItem, i}
			<div>
				<a
					href={linkItem.url}
					class="font-mono text-xl uppercase dark:text-white text-black hover:text-gray-500 inline-block"
					class:font-bold={i === linkGroups.length - 1}
				>
					{linkItem.title}
				</a>
			</div>
		{/each}
		<div id={SIDEBAR_ID} />
	</nav>
</header>
