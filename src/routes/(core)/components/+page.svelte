<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import IndexCard from '$lib/components/IndexCard.svelte';
	import SubNavPortal from '$lib/portals/SubNavPortal.svelte';
	import { startCase } from 'lodash-es';
	import type { PageData } from './$types';

	export let data: PageData;

	let items = ['button', 'index-card', 'notebook-page'];

	let selected = items[0];
</script>

<SubNavPortal>
	{#each items as item}
		<div>
			<button on:click={() => (selected = item)}>
				{startCase(item)}
			</button>
		</div>
	{/each}
</SubNavPortal>

{#if selected === 'button'}
	<div>
		<Button>Test button</Button>
	</div>
{:else if selected === 'index-card'}
	<div>
		<IndexCard label="Hello" title="Index card title" href="/" />
	</div>
{:else if selected === 'notebook-page'}
	<div class="notebook-page">Notebook page</div>
{/if}

<style lang="scss">
	.notebook-page {
		background-color: #fff9f1;
	}
</style>
