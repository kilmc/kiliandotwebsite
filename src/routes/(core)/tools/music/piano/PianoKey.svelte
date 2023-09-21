<script lang="ts">
	import type { Key, NoteDisplay } from './types';

	type KeyType = 'black' | 'white';

	export let highlightedNotes: NoteDisplay[];
	export let key: Key;
	export let type: KeyType;

	const isHighlighted = () => {
		return highlightedNotes.some((note) => note.midiNumber === key.midiNumber);
	};

	const keyColorClasses = {
		black: 'bg-black text-white',
		white: 'bg-white text-black',
		blackHighlighted: 'bg-green-700 text-white',
		whiteHighlighted: 'bg-green-300 text-black'
	} as const;

	const colorKeys = (type: KeyType, highlighted: boolean) => {
		const colorName: keyof typeof keyColorClasses = `${type}${highlighted ? 'Highlighted' : ''}`;
		return keyColorClasses[colorName];
	};

	const chooseDisplayNote = (key: Key) => {
		return highlightedNotes.find((note) => note.midiNumber === key.midiNumber)?.note;
	};

	const baseClasses = 'flex items-end justify-center  pb-2 text-sm';
	const whiteClasses = 'border-l-2 border-b-2 border-black h-full';
	const blackKeyClasses = 'absolute top-0 -right-[calc(33%+1px)] w-2/3 z-10 h-2/3';
</script>

<div
	class={[
		baseClasses,
		colorKeys(type, isHighlighted()),
		type === 'black' ? blackKeyClasses : undefined,
		type === 'white' ? whiteClasses : undefined
	].join(' ')}
>
	{chooseDisplayNote(key) || ''}
</div>
