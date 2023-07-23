<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import ItemLabel from './ItemLabel.svelte';
</script>

<svelte:head>
	<title>Kilian Dot Website</title>
</svelte:head>

<div class="grid grid-cols-2 gap-x-16 p-10 lg:p-20 font-mono max-w-6xl mx-auto">
	<aside class="col-span-1 flex gap-2">
		<div class="font-bold uppercase flex flex-col dark:text-green-400 text-blue-600 logo mb-8">
			<div>Kilian</div>
			<div>Dot</div>
			<div>Website</div>
		</div>
	</aside>
	<nav class="flex flex-col items-start col-span-1 text-2xl">
		<Link href="/projects">Projects</Link>
		<Link href="/posts">Posts</Link>
		<Link href="/music">Music</Link>
	</nav>
	<div class="mb-8 col-span-full md:col-span-1">
		<h2
			class="font-bold text-md mb-3 dark:bg-white dark:text-black bg-black text-white px-2 inline-block"
		>
			UPDATE: 2023-07-23
		</h2>
		<p class="mb-4">
			I recently made the decision to pursue music as a career and leave tech. There's more detail
			about what lead to the decision in
			<Link href="/posts/returning-to-hope">this post</Link>. I'm incredibly excited about it; it's
			been a lifelong dream. That being said, it's going to take a lot for me to start making a
			living wage from this work.
		</p>
		<p>
			I wrote a second post detailing my current skillset and cataloging some of the things I've
			worked on. If you're reading this and have any job opportunities, any connections or any
			advice please reach out via email.
		</p>
	</div>
	<div class="col-span-full md:col-span-1 flex flex-col">
		<a class="mb-6 flex flex-col items-start" href="/posts/returning-to-hope">
			<ItemLabel>Post</ItemLabel>
			<Link class="text-2xl inline-block">Returning to Hope</Link>
		</a>
		<a class="mb-6 flex flex-col items-start" href="/projects/battery">
			<ItemLabel>Project</ItemLabel>
			<Link class="text-2xl inline-block">Battery</Link>
		</a>
		<a class="mb-6 flex flex-col items-start" href="/lists/2022/albums">
			<ItemLabel>List</ItemLabel>
			<Link class="text-2xl inline-block">Best Albums of 2022</Link>
		</a>
	</div>
</div>

<style lang="scss">
	.logo {
		font-size: 4rem;
		line-height: 0.8;

		@media (min-width: 640px) {
			font-size: 3rem;
		}
	}
</style>
