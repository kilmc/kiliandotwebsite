<script lang="ts">
	export let title: string;
</script>

<div class="flex">
	<div
		class="font-mono text-lg w-full dark:text-white dark:bg-gray-600 bg-cream-100 p-5 pt-10 sm:px-10 md:px-20 md:pt-20 md:pb-60 mx-auto"
	>
		<h2 class="underline underline-offset-4 uppercase mb-10 xs:mb-20 text-center">{title}</h2>
		<slot />
	</div>
</div>
