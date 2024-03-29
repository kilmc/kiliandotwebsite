<script lang="ts">
	const colors = ['blue', 'green', 'pink', 'yellow'] as const;
	const types = ['plain', 'lines', 'grid', 'dots'] as const;

	type CardColor = typeof colors[number];
	type CardType = typeof types[number];

	export let title: string;
	export let href: string;

	export let color: CardColor = 'yellow';
	export let type: CardType = 'lines';
	export let label: string;
	export let description: string | undefined = undefined;
</script>

<div
	class="index-card index-card--{color} index-card--{type} aspect-7/5 relative font-mono overflow-clip {$$restProps.class ||
		''}"
>
	{#if type}<div class="index-card__label">{label}</div>{/if}
	<a {href} class="inline-block hover:underline"><h2 class="index-card__heading">{title}</h2></a>
	{#if description}<p class="index-card__description mb-2">{description}</p>{/if}
	<div class="index-card__type absolute top-0 left-0 h-full w-full pointer-events-none" />
</div>

<style lang="scss">
	@use '$lib/scss/mixins';

	$exa-bg-yellow: #fff9bf;
	$exa-bg-blue: #c7e1ef;
	$exa-bg-pink: #e8bdd2;
	$exa-bg-green: #bfd8b9;

	$exa-lines-blue: #5064aa;
	$exa-lines-grey: #323230;

	.index-card {
		line-height: 20px;
		padding: 0 30px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
		max-width: 29rem;

		// Colors

		&--blue {
			background-color: $exa-bg-blue;
		}

		&--green {
			background-color: $exa-bg-green;
		}

		&--pink {
			background-color: $exa-bg-pink;
		}

		&--yellow {
			background-color: $exa-bg-yellow;
		}

		// Variants

		&--lines {
			.index-card__type {
				@include mixins.lines(30, rgba($exa-lines-grey, 0.33), transparent);
			}
		}

		// Sub-components

		&__label {
			padding-top: 16px;
			font-size: 14px;
			line-height: 20px;
			text-transform: uppercase;
			letter-spacing: 0.05rem;
		}

		&__heading {
			margin-top: 6px;
			font-size: 20px;
			line-height: 27px;
			font-weight: bold;
		}

		&__description {
			font-size: 15px;
			margin-top: 29px;
			line-height: 27px;
		}
	}
</style>
