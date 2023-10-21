<script lang="ts">
	import { getPianoKeys } from './helpers';
	import type { PianoKeyMode } from './types';
	import PianoKey from './PianoKey.svelte';
	import ScaleGuesserPianoKey from './ScaleGuesserPianoKey.svelte';

	export let octaves = 2;
	export let mode: PianoKeyMode = 'filter';

	const processedKeys = getPianoKeys(octaves);
</script>

<div class="max-w">
	<div
		class="grid grid-cols h-32 relative border-t-2 border-r-2 border-black"
		style="grid-template-columns: repeat({octaves * 7}, minmax(0,1fr))"
	>
		{#each processedKeys as [white, black]}
			<div class="relative">
				<PianoKey type="white">
					<ScaleGuesserPianoKey key={white} {mode} />
				</PianoKey>

				{#if black !== undefined}
					<PianoKey type="black">
						<ScaleGuesserPianoKey key={black} {mode} />
					</PianoKey>
				{/if}
			</div>
		{/each}
	</div>
</div>
