<script lang="ts">
	import type { HeavyRotationItem } from '$lib/db/heavy-rotation';

	export let month: string;
	export let items: HeavyRotationItem[];
</script>

{#each items as item}
	<div class="">
		<div class="flex">
			<h3 class="uppercase text-sm font-bold mb-1">Heavy Rotation</h3>
			<p class="ml-auto">{month}</p>
		</div>
		<img src={item.artwork} alt="" class="mb-3" />
		<div>
			<p class="text-lg font-bold">{item.releaseTitle}</p>
			<p class="text-base">{item.artist}</p>
		</div>
	</div>
{/each}
