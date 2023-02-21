<script lang="ts">
	export let href: string;
</script>

<a {href} class="block relative">
	<div class="top">
		<slot name="bottom" />
	</div>
	<div class="middle-and-bottom">
		<div class="middle">
			<slot name="middle" />
		</div>
		<div class="bottom">
			<slot name="top" />
		</div>
	</div>
</a>

<style lang="scss">
	.top {
		transform: rotate(10deg);
	}

	.middle-and-bottom {
		position: absolute;
		top: 0;
		pointer-events: none;
	}

	.middle {
		position: absolute;
		// z-index: -1;
		transform: rotate(0);
	}

	.bottom {
		position: absolute;
		// z-index: -2;
		transform: rotate(-10deg);
	}
</style>
