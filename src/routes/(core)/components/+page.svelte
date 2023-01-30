<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Display from './Display.svelte';
</script>

<a href="/components/dev">Component Dev</a>

<Display label="Input">
	<Input label="Test" id="component-input" value="Someting cool" />
</Display>

<Display label="Button">
	<div class="flex gap-2">
		<Button>Button text</Button>
		<Button variant="secondary">Secondary text</Button>
	</div>
</Display>
