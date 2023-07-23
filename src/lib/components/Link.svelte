<script lang="ts">
	export let href: string | undefined = undefined;
	export let tag = 'span';

	let styleClasses = [
		'font-bold underline hover:bg-gray-200 dark:hover:bg-gray-700',
		$$restProps.class
	].join(' ');

	$: computedTag = href && href.length > 0 ? 'a' : tag;
</script>

{#if computedTag === 'a'}
	<a {href} {...$$restProps} class={styleClasses}><slot /></a>
{:else}
	<svelte:element this={computedTag} {...$$restProps} class={styleClasses}>
		<slot />
	</svelte:element>
{/if}
