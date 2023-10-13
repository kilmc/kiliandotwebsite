<script lang="ts">
	import * as Tone from 'tone';
	export let synthNote: string;
	export let displayNote: string;
	export let tabindex: number | undefined = undefined;
	const synth = new Tone.Synth().toDestination();

	function playNote(): void {
		Tone.start().then(() => {
			synth.triggerAttackRelease(synthNote, '0.25s');
		});
	}

	function handleKeypress(e: KeyboardEvent) {
		switch (e.code) {
			case 'Space':
			case 'Enter':
				playNote();
				break;
			default:
				return; // Quit when this doesn't handle the key event.
		}
	}
</script>

<button
	{tabindex}
	class={`${$$restProps.class || ''}`}
	on:mousedown={playNote}
	on:keydown={handleKeypress}
>
	<div class="h-full flex items-end justify-center">{displayNote}</div>
</button>
