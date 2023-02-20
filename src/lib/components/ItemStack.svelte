<script lang="ts">
</script>

<div class="item-stack relative">
	<div class="top">
		<slot name="top" />
	</div>
	<div class="middle-and-bottom">
		<div class="middle">
			<slot name="middle" />
		</div>
		<div class="bottom">
			<slot name="bottom" />
		</div>
	</div>
</div>

<style lang="scss">
	.top {
		transform: rotate(-10deg);
	}

	.middle-and-bottom {
		position: absolute;
		top: 0;
	}
	.middle {
		position: absolute;
		z-index: -1;
		transform: rotate(0);
	}

	.bottom {
		position: absolute;
		z-index: -2;
		transform: rotate(10deg);
	}
</style>
