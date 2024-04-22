<script context="module">
	import p from './p.svelte';
	import em from './em.svelte';
	import strong from './strong.svelte';

	import a from './a.svelte';

	import h1 from './h1.svelte';
	import h2 from './h2.svelte';
	import h3 from './h3.svelte';
	import h4 from './h4.svelte';
	import h5 from './h5.svelte';
	import h6 from './h6.svelte';

	import ul from './ul.svelte';
	import ol from './ul.svelte';
	import li from './li.svelte';

	import hr from './hr.svelte';

	import blockquote from './blockquote.svelte';

	export { p, em, strong, a, h1, h2, h3, h4, h5, h6, blockquote, ul, ol, li, hr };
</script>

<div class="@container">
	<div class="prose prose-lg dark:prose-invert @lg:prose-xl">
		<slot />
	</div>
</div>
