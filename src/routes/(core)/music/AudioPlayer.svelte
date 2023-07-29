<script lang="ts" context="module">
	let current: HTMLAudioElement;
</script>

<script lang="ts">
	import { secondsToTimeString } from '$lib/helpers/secondsToTimeString';

	// Props
	// ----------------------------------------------------------
	export let fileName: string;
	export let title: string;
	export let description: string | undefined;

	let src = `/audio/loosies/${fileName}.mp3`;
	let audioFile = new Audio(src);

	let timeDisplayInit = '0:00';

	let trackDuration = 0;
	$: trackDurationDisplay =
		trackDuration === 0 ? timeDisplayInit : secondsToTimeString(trackDuration);
	let trackCurrentTime = 0;
	$: trackCurrentTimeDisplay =
		trackCurrentTime === 0 ? timeDisplayInit : secondsToTimeString(trackCurrentTime);

	let trackTimer: ReturnType<typeof setTimeout>;

	// State
	// ----------------------------------------------------------

	let isPlaying = false;
	let isSeeking = false;
	let previousIsPlaying: boolean | undefined;

	// Elements
	// -----------------------------------------------------------

	let progressBar: HTMLDivElement;
	let seekPreview: HTMLDivElement;

	// Media Player Functions
	// -----------------------------------------------------------

	function updateTime() {
		trackCurrentTimeDisplay = secondsToTimeString(audioFile.currentTime);
		trackCurrentTime = audioFile.currentTime;
	}

	const startTimeRunning = () => {
		trackTimer = setInterval(updateTime, 100);
	};

	function stopOthers() {
		if (current && current !== audioFile) current.pause();
		current = audioFile;
	}

	// Media Player Functions
	// -----------------------------------------------------------

	function pause() {
		stopOthers();
		isPlaying = false;
		audioFile.pause();
		clearInterval(trackTimer);
	}

	function play() {
		startTimeRunning();
		isPlaying = true;
		audioFile.play();
		stopOthers();
	}

	function stop() {
		clearInterval(trackTimer);
		isPlaying = false;
		trackCurrentTimeDisplay = '0:00';
		trackCurrentTime = 0;
	}

	function setSeekPreview(position: number) {
		seekPreview.style.width = position + 'px';
	}

	function calculateChanges(e: SvelteMouseEvent) {
		if (!(e?.target instanceof HTMLElement)) return;

		const { left, width } = e.target.getBoundingClientRect();
		const position = e.clientX - left;
		const percentage = position / width;
		const newTime = trackDuration * percentage;

		return { position, newTime };
	}

	function setSeekPosition(e: SvelteMouseEvent) {
		if (!(e?.target instanceof HTMLElement)) return;
		const changes = calculateChanges(e);

		if (changes) {
			seekPreview.style.width = changes.position + 'px';

			trackCurrentTime = changes?.newTime;
			audioFile.currentTime = changes?.newTime;
			progressBar.style.width = changes?.position + 'px';
		}
	}

	// Event handlers
	// -----------------------------------------------------------

	function handlePlayPause() {
		audioFile.paused ? play() : pause();
	}

	function handleMouseDown(e: SvelteMouseEvent) {
		if (previousIsPlaying === undefined) previousIsPlaying = isPlaying;

		pause();
		setSeekPosition(e);
		isSeeking = true;
	}

	function handleClick() {
		if (previousIsPlaying) play();

		previousIsPlaying = undefined;
		isSeeking = false;
	}

	function handleMouseMove(e: SvelteMouseEvent) {
		if (isSeeking) setSeekPosition(e);
		setSeekPreview(calculateChanges(e)?.position || 0);
	}

	function handleMouseLeave() {
		setSeekPreview(0);
	}

	function handleKeypress(e: SvelteKeyboardEvent) {
		switch (e.code) {
			case 'Space':
				handlePlayPause();
				break;
			default:
				return; // Quit when this doesn't handle the key event.
		}
	}

	// Audio Player Events
	// -----------------------------------------------------------

	audioFile.onloadedmetadata = () => {
		trackDurationDisplay = secondsToTimeString(audioFile.duration);
		trackDuration = audioFile.duration;
	};

	audioFile.onended = () => {
		stop();
	};
</script>

<div class="border-black border p-4 mb-2 rounded-sm">
	<details class="grid w-full grid-cols-2">
		<summary class="flex">
			<h2>{title}</h2>
			<span class="ml-auto">{trackCurrentTimeDisplay} / {trackDurationDisplay}</span>
		</summary>
		{description}
	</details>
	<div class="grid grid-cols-[1rem_1fr] gap-4 items-center">
		<button class="flex-none" on:click={handlePlayPause}>{isPlaying ? '⏸︎' : '⏵︎'}</button>
		<div
			role="slider"
			tabIndex="0"
			aria-valuetext="seek audio bar"
			aria-valuemax={trackDuration}
			aria-valuemin={0}
			aria-valuenow={trackCurrentTime}
			class="bg-black/10 w-full h-2 relative"
			on:keypress={handleKeypress}
			on:mousedown={handleMouseDown}
			on:click={handleClick}
			on:mousemove={handleMouseMove}
			on:mouseleave={handleMouseLeave}
		>
			<div
				bind:this={seekPreview}
				class="bg-black/10 h-full w-0 absolute top-0 left-0 pointer-events-none"
			/>
			<div
				bind:this={progressBar}
				style="width: {(trackCurrentTime / trackDuration) * 100}%"
				class="bg-black h-full absolute top-0 left-0 pointer-events-none"
			/>
		</div>
	</div>
</div>

<style lang="scss">
	summary::-webkit-details-marker {
		display: none;
	}

	// details[open] {
	// 	span {
	// 		transform: rotate(90deg);
	// 		display: inline-block;
	// 	}
	// }
</style>
