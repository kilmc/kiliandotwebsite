<script lang="ts">
	import { Synth } from 'tone/build/esm/';

	export let white: string;
	export let black: string | undefined = undefined;

	const synth = new Synth({
		oscillator: {
			type: 'triangle'
		},
		envelope: {
			attack: 0.5
		}
	}).toDestination();

	function playNote(note: string) {
		synth.triggerAttackRelease(`${note}4`, '8n');
	}
</script>

<div class="relative">
	<button class="key key--white" on:mousedown={() => playNote(white)}>{white}</button>
	{#if black !== undefined}
		<button class="key key--black absolute top-0" on:click={() => playNote(black || 'C')}
			>{black}</button
		>
	{/if}
</div>

<style lang="scss">
	.key {
		border-left: 1px solid #000;
		border-right: 1px solid #000;
		border-bottom: 1px solid #000;
		height: 20rem;

		&--white {
			width: 4rem;
		}
		&--black {
			width: 3rem;
			height: 13rem;
			right: -1.5rem;
			background-color: #000;
			color: white;
			z-index: 1;
		}
	}
</style>
