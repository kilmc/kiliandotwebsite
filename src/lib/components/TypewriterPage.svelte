<script lang="ts">
	export let title: string;
</script>

<div class="flex">
	<div class="font-mono text-lg bg-cream-100 px-20 pt-20 pb-60 mx-auto">
		<h2 class="underline underline-offset-4 uppercase mb-20 text-center">{title}</h2>
		<slot />
	</div>
</div>
