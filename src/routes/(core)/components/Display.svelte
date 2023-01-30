<script lang="ts">
	export let label: string;
</script>

<div class="mb-4">
	<h2 class="font-sans bg-black text-white px-2 border border-black inline-block">{label}</h2>
	<div class="border border-black bg-white p-4">
		<slot />
	</div>
</div>
