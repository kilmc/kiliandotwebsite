<script lang="ts">
	export let sample: string;
	export let label: string;
	let audio: HTMLAudioElement;

	function play() {
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
			audio.currentTime = 0;
		}
	}
</script>

<button on:click={play}>{label}</button>
<audio bind:this={audio} src={sample} playsinline />
