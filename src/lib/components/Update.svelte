<script lang="ts">
	export let date: string;
	export let content: any;

	function convertDate(date: string) {
		return new Date(date).toLocaleDateString('en-EN', {
			year: 'numeric',
			month: 'long',
			day: '2-digit'
		});
	}

	$: formattedDate = convertDate(date);
</script>

<div>
	<h2
		class="font-bold text-md mb-3 dark:bg-white dark:text-black bg-black text-white px-2 inline-block"
	>
		{formattedDate}
	</h2>
	<svelte:component this={content} />
</div>
