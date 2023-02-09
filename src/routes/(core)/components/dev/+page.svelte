<script lang="ts">
	import IndexCard from './IndexCard.svelte';
</script>

<div class="layout">
	<IndexCard
		href="/projects/fast-bingo"
		title="Fast Bingo"
		color="pink"
		label="Project"
		description="A randomly generated bingo card to play along with watching the Fast and Furious Franchise
  with friends… or family. Fffffff"
	/>

	<IndexCard
		href="/projects/acnh-toolkit"
		title="New Horizons Toolkit"
		color="blue"
		description="A tool to help with catching all the different critters in Animal Crossing: New Horizons."
		label="Project"
	/>

	<IndexCard
		href="/projects/battery"
		title="Battery"
		color="green"
		description="An attempt at building a suite of Atomic CSS tools."
		label="Project"
	/>

	<IndexCard href="/music/best/2020/albums" label="List" title="Best Albums of 2020" />
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: repeat(auto-fit, 400px);
		gap: 2rem;
	}
</style>
