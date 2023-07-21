<script lang="ts">
	export let name = 'Name';
	export let posterUrl = '/images/posters/project-battery.png';
	export let linkUrl = '/projects/battery';
</script>

<div class={['poster', 'aspect-2/3 bg-zinc-200 ', $$restProps.class || ''].join(' ')}>
	<a
		href={linkUrl}
		class="w-full h-full flex font-bold uppercase text-center bg-cover"
		style="background-image: url('{posterUrl}');"
	>
		<span class="m-auto sr-only">{name}</span>
	</a>
</div>

<style lang="scss">
</style>
