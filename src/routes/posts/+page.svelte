<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Kilian | Posts</title>
</svelte:head>

<ul>
	{#each data.posts as post}
		<li>
			<a href={post.url} class="text-4xl font-black italic kdw-text-blue uppercase hover:not-italic"
				>{post.title}</a
			>
		</li>
	{/each}
</ul>
