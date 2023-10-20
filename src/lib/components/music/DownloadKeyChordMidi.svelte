<script lang="ts">
	import { getKey } from '@kilmc/music-fns';
	import { generateScaleChordsMidiZip } from './utils/midiChordGen';

	export let keyName = 'C major';

	$: fullKey = getKey(keyName);
	$: keyZipPromise = generateScaleChordsMidiZip(keyName);
</script>

{#await keyZipPromise}
	<p>...waiting</p>
{:then keyZipData}
	{#if keyZipData}
		<a
			href={URL.createObjectURL(keyZipData)}
			download="{fullKey?.name}.zip"
			class="bg-black dark:bg-white dark:text-black px-4 py-2 rounded-md text-white"
		>
			Download
		</a>
	{/if}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
