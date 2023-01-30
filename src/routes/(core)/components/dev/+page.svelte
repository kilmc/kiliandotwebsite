<script lang="ts">
	import IndexCard from './IndexCard.svelte';
</script>

<div class="layout">
	<IndexCard
		href="/projects/fast-bingo"
		title="Fast Bingo"
		color="pink"
		type="Project"
		description="A randomly generated bingo card to play along with watching the Fast and Furious Franchise
  with friends… or family. Fffffff"
	/>

	<IndexCard
		href="/projects/acnh-toolkit"
		title="New Horizons Toolkit"
		color="blue"
		description="A randomly generated bingo card to play along with watching the Fast and Furious Franchise
    with friends… or family. Fffffff"
		type="Project"
	/>

	<IndexCard href="/music/best/2020/albums" title="Best Albums of 2020" color="blue" />
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}
</style>
