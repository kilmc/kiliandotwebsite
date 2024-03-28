<script lang="ts">
	export let title = '';
</script>

<div class="bg-white/20 rounded-lg shadow-md">
	<h3 class="text-lg pt-4 px-5 mb-2">{title}</h3>
	<p class="text-base px-5 pb-5">
		<slot />
	</p>
</div>
