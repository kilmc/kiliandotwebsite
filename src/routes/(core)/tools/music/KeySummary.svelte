<script lang="ts">
	export let scale: string[];
	let majorKey = scale.at(0);
	let minorKey = scale.at(5);

	function getAccidentals(scale: string[]): ['flat' | 'sharp' | 'none', string[]] {
		const flats = scale.filter((note) => /b/.test(note));
		const sharps = scale.filter((note) => /#/.test(note));

		if (flats.length > 0) {
			return ['flat', flats];
		} else if (sharps.length > 0) {
			return ['sharp', sharps];
		}

		return ['none', []];
	}

	$: [_, notes] = getAccidentals(scale);
</script>

<div class="text-lg">{majorKey} major</div>
<div class="text-lg">{minorKey} minor</div>
<div class="text-lg">{notes.length}: {notes.join(' ')}</div>
