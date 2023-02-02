<div class="layout bg-black text-white h-screen">
	<div
		class="logo font-serif font-black italic text-5xl text-white leading-10 border-blue-600 border-8 aspect-square w-full flex"
	>
		<div class="m-auto">
			<div>Kilian</div>
			<div>Dot</div>
			<div>Website</div>
		</div>
	</div>

	<div class="border-white border-8 p-10 link-layout">
		<div>
			<h2 class="font-mono font-bold text-xl">Components</h2>
			<ul class="list-inside text-xl">
				<li><a href="/components/dev">All</a></li>
				<li>
					<a href="/components/dev">Dev</a>
				</li>
			</ul>
		</div>
		<div>
			<h2 class="font-mono font-bold text-xl">Projects</h2>
			<ul class="list-inside text-xl">
				<li><a href="/projects/fast-bingo">Fast Bingo</a></li>
				<li>
					<a href="/projects/snackalong">Snackalong</a>
				</li>
			</ul>
		</div>

		<div>
			<h2 class="font-mono font-bold text-xl">Tools</h2>
			<ul class="list-inside text-xl">
				<li><a href="/tools/math/ratios">Aspect Ratio</a></li>
				<li>
					<a href="/tools/music/bpm">BPM</a>
				</li>
				<li>
					<a href="/tools/music/artwork">Artwork</a>
				</li>
				<li>
					<a href="/tools/design/palette">Palette</a>
				</li>
			</ul>
		</div>

		<div>
			<h2 class="font-mono font-bold text-xl">Misc</h2>
			<ul class="list-inside text-xl">
				<li><a href="/sitemap">Sitemap</a></li>
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-columns: 15rem 1fr;
	}

	.link-layout {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}

	ul {
		list-style-type: '–  ';
	}
</style>
