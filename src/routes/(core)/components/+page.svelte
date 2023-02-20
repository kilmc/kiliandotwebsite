<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import IndexCard from '$lib/components/IndexCard.svelte';
	import SubNavPortal from '$lib/portals/SubNavPortal.svelte';
	import { startCase } from 'lodash-es';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import NotebookPage from '$lib/components/NotebookPage.svelte';
	import ItemStack from '$lib/components/ItemStack.svelte';
	import Vinyl from '$lib/components/Vinyl.svelte';

	let items = ['button', 'index-card', 'notebook-page', 'vinyl', 'item-stack'];

	const getSelected = () => {
		const item = $page.url.searchParams.get('item');
		if (item && items.includes(item)) {
			return item;
		} else {
			return items[0];
		}
	};

	$: selected = getSelected();

	const handleChange = (item: string) => {
		selected = item;

		$page.url.searchParams.set('item', item);
		goto(`?${$page.url.searchParams.toString()}`);
	};
</script>

<SubNavPortal>
	{#each items as item}
		<div>
			<button on:click={() => handleChange(item)}>
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
	<NotebookPage>Best Songs of 2017</NotebookPage>
{:else if selected === 'vinyl'}
	<Vinyl />
{:else if selected === 'item-stack'}
	<div class="flex gap-8">
		<ItemStack>
			<NotebookPage slot="top">Best Albums of 2017</NotebookPage>
			<NotebookPage slot="middle" />
			<NotebookPage slot="bottom" />
		</ItemStack>
		<ItemStack>
			<Vinyl slot="top" artist="Andy Shauf" release="The Neon Skyline" />
			<Vinyl slot="middle" artist="Petey" release="Lean Into Life" />
			<Vinyl slot="bottom" />
		</ItemStack>
	</div>
{/if}
