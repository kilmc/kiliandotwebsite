<script lang="ts">
	import { debounce } from 'lodash';

	let bpm = 120;
	let clicks: number[] = [];

	const getBpm = () => {
		const first = clicks.at(0) || 0;
		const last = clicks.at(-1) || 0;
		const multiplier = 60000 / (last - first);

		return Math.round(multiplier * clicks.length);
	};

	const reset = debounce(() => {
		clicks = [];
	}, 2000);

	const handleClick = (e: MouseEvent) => {
		clicks = clicks.concat(new Date().valueOf());

		if (clicks.length >= 4) {
			bpm = getBpm();
		}
		reset();
	};
</script>

<button
	class="text-4xl font-azo m-auto bg-black text-white px-4 py-2 rounded-md"
	on:click={handleClick}
>
	{bpm}
</button>
