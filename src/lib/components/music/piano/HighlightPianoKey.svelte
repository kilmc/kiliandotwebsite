<script lang="ts">
	import type { PianoKeyType } from './types';
	export let highLightedNote: Note | undefined;
	export let key: PianoKeyType;

	const whiteKeyClasses = `text-black ${highLightedNote ? 'bg-green-300' : ''}`;
	const blackKeyClasses = `text-white ${highLightedNote ? 'bg-green-700' : ''}`;
</script>

<div
	class="w-full h-full flex items-end justify-center text-black {key.type === 'white'
		? whiteKeyClasses
		: blackKeyClasses}"
>
	{highLightedNote ? highLightedNote.name : ''}
</div>
