<script lang="ts">
	import * as Tone from 'tone';
	export let note = 'C4';

	const synth = new Tone.Synth().toDestination();

	function playNote(): void {
		Tone.start().then(() => {
			synth.triggerAttackRelease(note, '0.25s');
		});
	}
</script>

<button class={$$restProps.class || ''} on:mousedown={playNote}>
	<span class="sr-only">{note}</span>
</button>
