<script lang="ts">
	export let label: string;
	export let id: string;
	export let value: string;
	export let pattern: string | undefined = undefined;
</script>

<div class={$$restProps.class || ''}>
	<label for={id} class="block font-sans text-xs uppercase tracking-wider mb-1">{label}</label>
	<input
		{id}
		bind:value
		class="border border-gray-400 rounded-sm px-2 py-1 font-sans w-full"
		{pattern}
	/>
</div>
