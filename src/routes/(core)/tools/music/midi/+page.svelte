<script lang="ts">
	let number: number;

	async function roll() {
		const response = await fetch('/tools/music/midi/chord');
		number = await response.json();
	}
</script>

<button class="bg-black px-4 py-2 rounded-md text-white" on:click={roll}>Download Chord</button>

<div>
	Result
	{#if number !== undefined}
		<p>You rolled a {number}</p>
	{/if}
</div>
