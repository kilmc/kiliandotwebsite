<div class="typography w-50 font-mono">
	<p>
		Back in [TKTK] myself and my friend Nathan realised that we both adored the film Ocean's Eleven.
		At some point in our chatting about it we joked about doing a screening where we served people
		everything Brad Pitt ate or drank during the film. That joke turned into a full-fledged event
		with branding and gift bags, drinks and food, a quiz with prizes and a mystery for the small
		group of friends who we planned to invite.
	</p>
	<p>
		We built out a full site that goes into much more detail which I fully recommend you read
		through.
	</p>
	<p>
		It is without a doubt one of the most joyful things I've ever participated in making. We didn't
		do it for money—quite the opposite in fact—we also didn't do it for a bunch of strangers. We ran
		a silly event at a ridiculous level of detail and production just so we could give our friends a
		really fun experience. That remains one of my favourite things I've made and Nathan one of my
		favourite humans.
	</p>
	<p>
		We still keep an eye out for another movie that we could do it with for a sequel to the event,
		but nothing has ever lit us up quite like Ocean's Eleven. We may never do another, but I think
		we're both ok with that.
	</p>
</div>

<style lang="scss">
	@use 'sass:math';
	@mixin lines($height: 30, $lineColor: #000, $bgColor: transparent) {
		background: repeating-linear-gradient(
			$bgColor 0px,
			$bgColor $height + 0px,
			$lineColor $height + 1px
		);
	}

	@mixin alignToGrid($font-size: 16) {
		$lh-base: 30px; //preferrably use a global variable for this for greater flexibility
		$multiplier: ceil(math.div($font-size, $lh-base));
		$baseline-grid-size: $lh-base * $multiplier;

		--baseline-grid-size: #{$baseline-grid-size};
		--baseline: calc(((var(--baseline-grid-size) - 1ex) / 2));

		font-size: $font-size;
		line-height: var(--baseline-grid-size);
		padding-top: var(--baseline);
		margin-bottom: calc(var(--baseline-grid-size) - var(--baseline));
	}

	p {
		@include alignToGrid(20px);
	}
</style>
