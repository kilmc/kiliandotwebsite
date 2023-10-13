<script lang="ts">
	type KeyType = 'black' | 'white';
	export let type: KeyType;

	const baseClasses = 'flex items-end justify-center text-sm';
	const whiteClasses = 'bg-white text-black border-l-2 border-b-2 border-black h-full';
	const blackKeyClasses =
		'bg-black text-white absolute top-0 -right-[calc(33%+1px)] w-2/3 z-10 h-2/3 border-x-2 border-black border-b-2';
</script>

<div
	class={[
		baseClasses,
		type === 'black' ? blackKeyClasses : undefined,
		type === 'white' ? whiteClasses : undefined
	].join(' ')}
>
	<slot />
</div>
