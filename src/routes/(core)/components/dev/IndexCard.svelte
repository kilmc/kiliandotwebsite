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
	<a {href}><h2 class="index-card__heading">{title}</h2></a>
	{#if description}<p class="index-card__description mb-2">{description}</p>{/if}
	<div class="index-card__type absolute top-6 left-0 h-full w-full pointer-events-none" />
</div>

<style lang="scss">
	@use 'sass:math';

	$exa-bg-yellow: #fff9bf;
	$exa-bg-blue: #c7e1ef;
	$exa-bg-pink: #e8bdd2;
	$exa-bg-green: #bfd8b9;

	$exa-lines-blue: #5064aa;
	$exa-lines-grey: #323230;

	@mixin lines($height: 30, $lineColor: #000, $bgColor: transparent) {
		background: repeating-linear-gradient(
			$bgColor 0px,
			$bgColor $height + 0px,
			$lineColor $height + 1px
		);
		background-position: 0 0px;
	}

	.index-card {
		line-height: 20px;
		padding: 24px 30px 24px;

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
				@include lines(30, rgba($exa-lines-grey, 0.33), transparent);
			}
		}

		// Sub-components

		&__label {
			margin-top: 12px;
			font-size: 14px;
			line-height: 20px;
			text-transform: uppercase;
			letter-spacing: 0.05rem;
		}

		&__heading {
			margin-top: 2px;
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
