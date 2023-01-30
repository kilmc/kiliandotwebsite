<script lang="ts">
	const colors = {
		pink: 'bg-pink-100',
		blue: 'bg-blue-200'
	};

	type Layout = {
		heading?: string;
		wrapper?: string;
	};

	const layouts: Record<string, Layout> = {
		full: {
			heading: 'font-serif'
		},
		callout: {
			heading: 'font-serif text-center py-10'
		}
	};

	type CardColor = keyof typeof colors;
	type CardLayout = keyof typeof layouts;

	export let title: string;
	export let href: string;

	export let color: CardColor = 'blue';
	export let type: string | undefined = undefined;
	export let description: string | undefined = undefined;

	const getLayout = (title?: string, description?: string): CardLayout => {
		if (Boolean(title) && Boolean(description)) {
			return 'full';
		} else if (!Boolean(description)) {
			return 'callout';
		} else {
			return 'full';
		}
	};

	$: ({ heading, wrapper } = layouts[getLayout(title, description)]);
</script>

<div class="index-card line pt-2 {wrapper} {$$restProps.class || ''}">
	<div>
		{#if type}<div class="index-card__label">{type}</div>{/if}
		<h2 class="index-card__heading">{title}</h2>
		{#if description}<p class="index-card__description mb-2">{description}</p>{/if}
	</div>
</div>

<style lang="scss">
	@use 'sass:math';
	@mixin lines($height: 30, $lineColor: #000, $bgColor: transparent) {
		background: repeating-linear-gradient(
			$bgColor 0px,
			$bgColor $height + 0px,
			$lineColor $height + 1px
		);
		background-position: 10px 0px;
	}

	@mixin alignToGrid($font-size: 16) {
		$lh-base: 14px; //preferrably use a global variable for this for greater flexibility
		$multiplier: ceil(math.div($font-size, $lh-base));
		$baseline-grid-size: $lh-base * $multiplier;

		--baseline-grid-size: #{$baseline-grid-size};
		--baseline: calc(((var(--baseline-grid-size) - 1ex) / 2));

		font-size: $font-size;
		line-height: var(--baseline-grid-size);
		padding-top: var(--baseline);
		// margin-bottom: calc(var(--baseline-grid-size) - var(--baseline));
	}

	.index-card {
		line-height: 20px;
		padding: 0 20px;

		&__label {
			line-height: 30px;
			padding-top: 8px;
			font-size: 20px;
			// outline: 1px solid blue;
		}

		&__heading {
			position: relative;
			line-height: 30px;
			font-size: 30px;
			padding-top: 25px;
			// outline: 1px solid blue;
		}

		&__description {
		}
	}

	.line {
		@include lines(28, #aaa, #fff2c7);
	}
</style>
