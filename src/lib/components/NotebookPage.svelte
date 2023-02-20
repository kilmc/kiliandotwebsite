<div class="notebook-page notebook-page--small font-script aspect-7/10">
	<div><slot /></div>
</div>

<style lang="scss">
	@use '$lib/scss/mixins';

	.notebook-page {
		background-color: #fff9f1;
		text-align: center;
		display: flex;
		align-items: center;
		box-shadow: 0px 2px 4px rgba(black, 0.1);

		&--small {
			@include mixins.lines(19px, rgba(black, 0.25), #fff9f1);
			width: 10rem;
			font-size: 2rem;
			padding: 0 1rem;
			font-weight: 700;
			line-height: 26px;
		}
	}
</style>
