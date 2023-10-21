<script lang="ts">
	import { afterUpdate } from 'svelte';
	type Choice = {
		class: string;
		text: string;
		action?: () => void;
	};
	export let choices: Choice[];
	export let hideText = false;
	export let tabindex: number | undefined = undefined;
	let choiceIndex: number = 0;

	function handleClick() {
		choiceIndex <= choices.length - 2 ? (choiceIndex += 1) : (choiceIndex = 0);
	}

	$: currentChoice = choices[choiceIndex];

	afterUpdate(() => {
		if (currentChoice.action !== undefined) {
			currentChoice.action();
		}
	});
</script>

<button
	{tabindex}
	on:click={handleClick}
	class={`${$$restProps.class || ''} ${currentChoice.class}`}
>
	<span class:sr-only={hideText}>{currentChoice.text}</span>
</button>
