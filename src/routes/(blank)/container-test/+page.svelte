<script lang="ts">
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
</script>

<svelte:head>
	<title>Container Testing</title>
</svelte:head>

<header class="p-4"></header>
<div class="flex gap-10 mx-4">
	{#each Object.entries(containerSizes) as [name, value]}
		<div class="relative flex-none bg-white/10 h-screen" style="width: {value}">
			<div class="">{name}</div>
			<div class="@container">Component Goes Here</div>
		</div>
	{/each}
</div>
