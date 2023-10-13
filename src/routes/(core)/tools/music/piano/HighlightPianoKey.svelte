<script lang="ts">
	import type { Key } from './types';
	export let isHightlighted: boolean;
	export let notes: string[];
	export let key: Key;

	const pickNoteFromScale = (possibleNotes: string[]) => {
		return notes.find((note) => possibleNotes.includes(note)) || '';
	};

	const whiteKeyClasses = `text-black ${isHightlighted ? 'bg-green-300' : ''}`;
	const blackKeyClasses = `text-white ${isHightlighted ? 'bg-green-700' : ''}`;
</script>

<div
	class="w-full h-full flex items-end justify-center text-black {key.type === 'white'
		? whiteKeyClasses
		: blackKeyClasses}"
>
	{isHightlighted ? pickNoteFromScale(key.notes) : ''}
</div>
