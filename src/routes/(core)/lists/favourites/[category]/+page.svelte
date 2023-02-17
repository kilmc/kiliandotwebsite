<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="relative main-layout ml-10 overflow-scroll h-screen">
	<div class="bg-black py-4 pl-4">
		<div class="bg-cream-100 p-10 relative z-10">
			<h2 class="font-bold text-4xl mb-10">{data.title}</h2>
			<ol>
				{#each data.items as item}
					<li>{item.title}</li>
				{/each}
			</ol>
		</div>
	</div>
</div>
