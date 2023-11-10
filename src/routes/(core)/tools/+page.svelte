<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<svelte:head>
	<title>Tools</title>
</svelte:head>

<PageTitle>Tools</PageTitle>

<h3 class="font-bold uppercase mb-1">Music</h3>
<ul class="mb-5">
	<li>
		<a class="underline hover:no-underline hover:bg-zinc-200" href="/tools/music/keys">Keys</a>
	</li>
	<li>
		<a class="underline hover:no-underline hover:bg-zinc-200" href="/tools/music/keys/guess"
			>Key Guesser</a
		>
	</li>
	<li>
		<a class="underline hover:no-underline hover:bg-zinc-200" href="/tools/music/chords">Chords</a>
	</li>
	<li>
		<a class="underline hover:no-underline hover:bg-zinc-200" href="/tools/music/scales">Scales</a>
	</li>
</ul>

<h3 class="font-bold uppercase mb-1">Misc</h3>

<ul>
	<li>
		<a class="underline hover:no-underline hover:bg-zinc-200" href="/tools/album-artwork"
			>Album Artwork</a
		>
	</li>
	<li>
		<a class="underline hover:no-underline hover:bg-zinc-200" href="/tools/aspect-ratios"
			>Aspect Ratios</a
		>
	</li>
	<li>
		<a class="underline hover:no-underline hover:bg-zinc-200" href="/tools/colour-palettes"
			>Colour Paletter Generator</a
		>
	</li>
</ul>
