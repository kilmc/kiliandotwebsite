<script>
	import '../../app.css';
</script>

<svelte:head>
	<title>Kilian Dot Website</title>
</svelte:head>

<div
	class="dark:bg-black dark:text-white font-mono min-h-full grid grid-rows-[1fr_auto] grid-cols-[100%] max-w-4xl mx-auto p-5 sm:p-10 lg:py-20 lg:px-0"
>
	<slot />
</div>
