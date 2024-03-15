<script lang="ts">
	export let title = '';
	export let year = '';
</script>

<div class="text-2xl bg-white rounded-lg shadow-md px-8 py-8">
	<div>{title}</div>
	<div class="text-base mb-4">{year}</div>
	<p class="text-base">
		<slot />
	</p>
</div>
