<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2 class="font-bold">Tools</h2>
<ul>
	{#each data.items as item}
		<li>
			<a href={item.url}>{item.text}</a>
		</li>
	{/each}
</ul>
