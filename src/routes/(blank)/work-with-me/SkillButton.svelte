<script lang="ts">
	export let active = false;
	export let skill: string | undefined;
</script>

<button
	on:click
	on:mouseenter
	on:mouseleave
	class="py-1 px-2 md:py-2 md:px-3 text-lg md:text-2xl rounded-md transition-colors {active
		? 'bg-black text-white'
		: 'bg-zinc-300 hover:bg-zinc-400'}"
>
	{skill}
</button>
