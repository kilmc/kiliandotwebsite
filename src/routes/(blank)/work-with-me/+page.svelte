<script lang="ts">
	import { getRandomItem } from '$lib/helpers/array';
	import Card from './Card.svelte';

	const groupNames = ['guests', 'attendees', 'fans', 'audience'];
</script>

<svelte:head>
	<title>Kilian McMahon | Work With Me</title>
</svelte:head>

<main class="">
	<div class="bg-black p-20 text-white h-screen">
		<div class="grid grid-cols-5 w-full mb-20">
			<div class="col-span-3 text-6xl">
				<div class="font-bold">Kilian McMahon</div>
				<div>Experience Designer</div>
			</div>
			<a
				class="bg-white col-span-1 col-start-5 px-1 py-2 text-black self-center text-center font-bold"
				href="mailto:mail@kilian.website"
			>
				Get in touch
			</a>
		</div>

		<div class="grid grid-cols-5 w-full">
			<h2 class="col-span-3 col-start-2 text-6xl">
				I want to work with you to make your {getRandomItem(groupNames)} feel delighted, cared for and
				to give them truly unforgettable experiences.
			</h2>
		</div>
	</div>

	<div class="bg-slate-100">
		<div class="p-20">
			<div class="mb-10">
				<h2 class="text-4xl">Previous Work</h2>
			</div>
			<div class="flex">
				<div class="grid grid-cols-2 gap-6 max-w-4xl m-auto">
					<Card title="Úll Conference" year="2012 – 2014">
						I worked on this conference for its first three years. I was brought on to do the
						identity and website but over time I built trust with the organisers and I started
						taking on other aspects of the design of the event. My favourite aspect of this work
						were the lanyards, finding new ways each year to tie in the themes of the conference
						into this very functional item and trying to give all of our attendees a keepsake as
						well as a way to reduce the taxing task of remembering everyone's names throughout a
						multi-day conference
					</Card>

					<Card title="Funconf III" year="2013">
						I was asked to create the welcome packs for attendees of this event. It was the final
						year of an event that had been heightening each year for three years and so I pulled out
						all the stops to match the creative energy of the organisers and what they wanted this
						experience to be. My favourte part of this project was working with my Mom to design a
						carry pouch for all of the little things the attendees might need. The event took place
						on an island off the coast of Ireland and we included some pragmatic things like a
						compass and a flashlight as part of their packs.
					</Card>

					<Card title="The Net Guide" year="2015">
						This was the third year of an event which aimed to write and design a fake print
						publication in 24 hours. I had worked on the previous year as a designer for some
						articles but the third year was a much more ambitious project from a production
						perspective. We wanted to make a TV Guide for the internet and have it look and feel as
						close to a real TV Guide as possible. This was a fully voluntary work and took us about
						a year and half to finally get the damn thing in our hands but I hold it today and I
						can't believe we all managed to pull it off. A very silly idea taken very seriously is a
						thread that I love in my work.
					</Card>

					<Card title="Snackalong" year="2017">
						Myself and one of my very best friends in the world bonded over the fact that we both
						loved the 2001 Steven Soderburgh film Ocean's 11. We had this silly idea of screening
						the film for people and feeding them everything Brad Pitt's character eats and drinks
						throughout the film as it happens. That silly idea turned into a reality over months. We
						made teaser sites, got a deck of playing cards custom illustrated and printed, we had a
						quiz and prizes related to the film and sourced or made all of the items that Rusty
						consumes. It was a weird and wonderful night that took an enormous amount of effort and
						it was one of the best things I've ever done.
					</Card>
				</div>
			</div>
		</div>
	</div>
</main>
