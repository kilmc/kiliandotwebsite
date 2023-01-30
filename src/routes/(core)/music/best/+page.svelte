<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Music - Year End</h1>

<p>
	I've been keeping end of year lists for quite a while. I really like wrapping up the year by going
	through what I've listened to and trying to put them in a rough best-of order.
</p>

<ol class="font-sans font-black flex justify-around">
	{#each data.years as year}
		<li><a href={year.url}>{year.title}</a></li>
	{/each}
</ol>
