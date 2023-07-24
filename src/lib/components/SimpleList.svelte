<script lang="ts">
	import type { List } from '$lib/db/lists';
	import SingleItem from './lists/SingleItem.svelte';
	import DoubleItem from './lists/DoubleItem.svelte';
	import TripleItem from './lists/TripleItem.svelte';
	import type { ComponentType } from 'svelte';

	type ListEntry = {
		componentType: 'single' | 'double' | 'triple';
		component: ComponentType;
		props: {
			primaryKey: string;
			secondaryKey?: string;
			tertiaryKey?: string;
		};
	};

	function determineListItemType(list: List): ListEntry {
		if (list.type === 'favourites') {
			return {
				componentType: 'single',
				component: SingleItem,
				props: {
					primaryKey: 'title'
				}
			};
		} else if (list.type === 'yearEnd') {
			if (list.category === 'songs') {
				return {
					componentType: 'triple',
					component: TripleItem,
					props: {
						primaryKey: 'title',
						secondaryKey: 'release',
						tertiaryKey: 'artist'
					}
				};
			} else if (list.category === 'albums' || list.category === 'eps') {
				return {
					componentType: 'double',
					component: DoubleItem,
					props: {
						primaryKey: 'release',
						secondaryKey: 'artist'
					}
				};
			}
		}

		return {
			componentType: 'single',
			component: SingleItem,
			props: {
				primaryKey: 'title'
			}
		};
	}

	export let list: List;

	$: ({ componentType, component, props } = determineListItemType(list));
</script>

<ol
	class="grid layout layout--{componentType} gap-x-1 xs:gap-x-3"
	class:xs:gap-y-4={componentType === 'triple'}
	class:xs:gap-y-1={componentType === 'double'}
>
	{#each list.items as item, index}
		<li class="contents">
			<svelte:component this={component} index={index + 1} {item} {...props} />
		</li>
	{/each}
</ol>

<style lang="scss">
	.layout {
		&--single {
			grid-template-columns: min-content 1fr;
		}

		&--double {
			grid-template-columns: min-content 1fr 1fr;
		}

		&--triple {
			grid-template-columns: min-content 1fr 1fr;
		}
	}
</style>
