<script lang="ts">
	export let title: string;
</script>

<div class="flex">
	<div
		class="font-mono text-lg dark:text-white dark:bg-gray-600 bg-cream-100 p-10 lg:px-20 lg:pt-20 lg:pb-60 mx-auto"
	>
		<h2 class="underline underline-offset-4 uppercase mb-20 text-center">{title}</h2>
		<slot />
	</div>
</div>
