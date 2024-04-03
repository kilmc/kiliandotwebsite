<script lang="ts">
	export let active = false;
	export let skill: string | undefined;
</script>

<button
	on:click
	on:mouseenter
	on:mouseleave
	class="py-1 px-2 md:py-2 md:px-3 text-base lg:text-2xl rounded-md transition-colors {active
		? 'bg-emerald-500 text-black dark:bg-white dark:text-black'
		: 'bg-emerald-500/20 hover:bg-emerald-500/70 hover:text-black dark:hover:bg-white/70 dark:bg-white/20'}"
>
	{skill}
</button>
