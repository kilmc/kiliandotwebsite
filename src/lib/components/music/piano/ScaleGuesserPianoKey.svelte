<script lang="ts">
	import type { Writable } from 'svelte/store';
	import CyclicPicker from './CyclicPicker.svelte';
	import Synth from './Synth.svelte';
	import { getSynthNote } from './helpers';
	import type { Key } from './types';
	import { inScale, outScale } from '$lib/stores/store';

	export let key: Key;
	export let mode: 'synth' | 'filter';

	const removeFromStore = (store: Writable<string[]>, item: string) =>
		store.update((scale) => scale.filter((note) => note !== item));

	const addToStore = (store: Writable<string[]>, item: string) =>
		store.update((scale) => [...scale, item]);

	function handleNeutral(note: string) {
		removeFromStore(inScale, note);
		removeFromStore(outScale, note);
	}

	function handleInclude(note: string) {
		addToStore(inScale, note);
		removeFromStore(outScale, note);
	}

	function handleExclude(note: string) {
		addToStore(outScale, note);
		removeFromStore(inScale, note);
	}
</script>

<div class="h-full w-full relative">
	<Synth
		class="absolute top-0 right-0 bottom-0 left-0 {mode === 'synth' ? '' : 'pointer-events-none'}"
		tabindex={mode === 'synth' ? undefined : -1}
		synthNote={getSynthNote(key)}
		displayNote=""
	/>

	<CyclicPicker
		choices={[
			{ text: '', class: '', action: () => handleNeutral(key.notes[0]) },
			{ text: 'IN', class: 'bg-green-300', action: () => handleInclude(key.notes[0]) },
			{ text: 'OUT', class: 'bg-red-300', action: () => handleExclude(key.notes[0]) }
		]}
		class="absolute top-0 right-0 bottom-0 left-0 {mode === 'filter' ? '' : 'pointer-events-none'}"
		tabindex={mode === 'filter' ? undefined : -1}
		hideText
	/>
</div>
