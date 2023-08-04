<script lang="ts">
	import ReleaseDisplay from '$lib/components/ReleaseDisplay.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const containerSizes = {
		xs: '20rem',
		sm: '24rem',
		md: '28rem',
		lg: '32rem',
		xl: '36rem',
		'2xl': '42rem',
		'3xl': '48rem',
		'4xl': '56rem',
		'5xl': '64rem',
		'6xl': '72rem',
		'7xl': '80rem'
	};

	let selectedRelease = data.files[0].release;

	$: file = data.files.find((file) => file.release === selectedRelease) || data.files[0];
</script>

<header class="p-4">
	<select class="dark:bg-black border dark:border-white p-2 relative" bind:value={selectedRelease}>
		{#each data.files as file}
			<option>{file.release}</option>
		{/each}
	</select>
</header>
<div class="flex gap-10 mx-4">
	{#each Object.entries(containerSizes) as [name, value]}
		<div class="relative flex-none bg-white/10 h-screen" style="width: {value}">
			<div class="">{name}</div>
			<div>
				<ReleaseDisplay
					artist={file.artist}
					release={file.release}
					tracks={file.tracks}
					links={file.links}
					releaseDate={file.releaseDate}
				/>
			</div>
		</div>
	{/each}
</div>

<div></div>
