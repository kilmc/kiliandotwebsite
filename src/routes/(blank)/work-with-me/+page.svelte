<script lang="ts">
	import { includes } from 'lodash-es';
	import type { PageData } from './$types';
	import Card from './Card.svelte';
	import SkillButton from './SkillButton.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	let hoveredSkill: string | undefined;
	let clickedSkill: string | undefined;

	let projectSkills: string[] | undefined;

	const handleSkillHover = (skill?: string) => {
		if (hoveredSkill === undefined) {
			hoveredSkill = skill;
		} else {
			hoveredSkill = undefined;
		}
	};

	const handleSkillClick = (skill?: string) => {
		if (clickedSkill === undefined) {
			clickedSkill = skill;
		} else if (clickedSkill === skill) {
			clickedSkill = undefined;
		} else {
			clickedSkill = skill;
		}
	};

	const handleOpacity = (skills?: string[], hover?: string, click?: string) => {
		if (hover !== undefined) {
			return !skills?.includes(hover);
		} else if (hover === undefined && click !== undefined) {
			return !skills?.includes(click);
		} else {
			return false;
		}
	};

	const engSkills = [
		'CSS',
		'Javascript',
		'HTML',
		'Web Accessibility',
		'Design Systems',
		'TDD',
		'Library Design'
	];

	const engTools = [
		'Svelte',
		'Tailwind',
		'React',
		'Vue',
		'Typescript',
		'GraphQL',
		'Vite',
		'Webpack',
		'NPM Publishing',
		'Ruby',
		'Rails',
		'MySQL',
		'Git',
		'Jest',
		'Testing Library',
		'Storybook'
	];

	const webSkills = ['UI', 'UX', 'Responsive Design', 'Design Systems', 'Accessibility'];
	const webTools = ['Figma', 'Sketch', 'Creative Suite', 'Storybook'];

	const graphicSkills = ['Print', 'Book Layout', 'Logo/Identity', 'Typesetting'];
	const graphicTools = ['InDesign', 'Illustrator', 'Photoshop', 'After Effects'];

	export let data: PageData;
</script>

<svelte:head>
	<title>Kilian McMahon | Work With Me</title>
</svelte:head>

<main class="">
	<a
		href="/"
		class="inline-block font-bold uppercase text-blue-600 hover:bg-slate-200 text-lg m-10 md:m-20 mb-0"
	>
		Kilian Dot Website
	</a>
	<div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 md:mb-20 md:p-20">
			<div class="col-span-1 md:col-span-2 max-w-xl">
				<div class="text-4xl font-bold">Kilian McMahon</div>
				<div class="text-4xl mb-8">Freelance Generalist</div>

				<p class="text-2xl mb-8">
					I've worked on the web since 2011 doing a wide variety of jobs across design and
					engineering. I've also worked in print, art directed in-person events and done quirky side
					projects with a focus on the small details that make for a magical experience for the
					audience, attendees, or users.
				</p>

				<p class="text-2xl">
					Read on to get more detail about the jobs I've done and my skillset, but if I already seem
					like a good fit for a project of yours, feel free to&nbsp;<a
						href="mailto:mail@kilian.website"
						class="bg-black text-white py-0.5 px-2 inline-block rounded-md hover:bg-zinc-300 hover:text-black"
					>
						reach out
					</a>.
				</p>
			</div>
			<div class="col-span-1 h-60 md:h-auto relative">
				<div class="bg-gradient-to-b from-red-200 h-full w-full absolute"></div>
				<div class="bg-gradient-to-l from-teal-200 h-full w-full"></div>
			</div>
		</div>

		<div class="p-10 mb-20 md:p-20">
			<h2 class="text-4xl mb-8">Projects</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
				<div>
					<div class="flex flex-wrap gap-x-3 gap-y-3">
						{#each data.skills as skill}
							<SkillButton
								active={projectSkills?.includes(skill ?? '') || skill === clickedSkill}
								{skill}
								on:click={() => handleSkillClick(skill)}
								on:mouseenter={() => handleSkillHover(skill)}
								on:mouseleave={() => handleSkillHover(undefined)}
							/>
						{/each}
					</div>
				</div>

				<ul class="grid grid-cols-4 gap-4">
					{#each data.items as project}
						<li
							class="aspect-2/3 bg-zinc-200 hover:bg-zinc-300 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 hover:-translate-x-1"
							class:opacity-30={handleOpacity(project.skills, hoveredSkill, clickedSkill)}
						>
							<a
								href={project.url}
								class="w-full h-full flex font-bold uppercase text-center bg-cover"
								style="background-image: url('{project.poster}');"
								on:mouseenter={() => {
									projectSkills = project.skills;
								}}
								on:mouseleave={() => {
									projectSkills = undefined;
								}}
							>
								<span class="m-auto sr-only">{project.text}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div
			class="bg-gradient-to-t lg:bg-gradient-to-l to-rose-300 from-indigo-300 text-black p-10 pt-10 lg:p-20"
		>
			<h2 class="text-4xl mb-5">Specifics</h2>
			<div class="grid grid-cols-1 lg:grid-cols-2">
				<p class="mb-16">
					I've worked across disciplines for a long time and have gathered skills, experience and a
					proficiency with myriad tools along the way. I'm very comfortable adapting to new
					processes and learning new tools for a given project but I also thrive when working with
					things I am familiar with.
				</p>
			</div>

			<div class="grid grid-col-1 lg:grid-cols-3 gap-10">
				<div>
					<h2 class="text-2xl font-bold mb-3">Enigneering</h2>
					<div class="grid grid-cols-2 gap-4 mb-10">
						<div>
							<h4 class="text-base">Title</h4>
							<div class="text-2xl">Senior Frontend Engineer</div>
						</div>

						<div>
							<h4 class="text-base">Experience</h4>
							<div class="text-2xl">7 years</div>
						</div>
					</div>

					<div class="mb-10">
						<div class="mb-3">
							<h3>Core Skills</h3>
						</div>
						<div class="text-xl flex gap-2 flex-wrap">
							{#each engSkills as item}
								<span class="inline-block py-1 px-3 rounded-md bg-white/20">{item}</span>
							{/each}
						</div>
					</div>

					<div class="mb-10">
						<div class="mb-3">
							<h3>Tools & Frameworks</h3>
						</div>
						<div class="text-xl flex gap-2 flex-wrap">
							{#each engTools as item}
								<span class="inline-block py-1 px-3 rounded-md bg-white/20">{item}</span>
							{/each}
						</div>
					</div>
					<!-- 
					<div class="mb-8">
						<div class="grid grid-cols-2 items-start gap-6">
							<Card title="CSS">
								My favourite part of working on the Web is CSS. I love solving problems with it, I
								love building robust layouts that can flex and fit with any content that gets thrown
								at it. It's just the best!
							</Card>

							<Card title="Svelte">
								I adore this tool. It's powerful but unobtrusive. I've built and rebuilt my site
								over the years but this site has evolved and grown with me more than any other
								because of Svelte's felxibility and ease of use.
							</Card>

							<Card title="Tailwind">
								Tailwind absolutely rules. I <a class="link" href="/projects/battery"
									>tried to build</a
								> a very similar toolkit in the past because Atomic CSS is my favourite default approach
								for building UI. I'm so glad this tool exists and that I don't have to maintain it.
							</Card>
						</div>
					</div> -->
				</div>

				<div>
					<div class="mb-3">
						<h2 class="text-2xl font-bold">Web/Product Design</h2>
					</div>
					<div class="grid grid-cols-2 gap-4 mb-10">
						<div>
							<h4 class="text-base">Title</h4>
							<div class="text-2xl">Product Designer</div>
						</div>

						<div>
							<h4 class="text-base">Experience</h4>
							<div class="text-2xl">6 years</div>
						</div>
					</div>

					<div class="mb-10">
						<div class="mb-3">
							<h3>Core Skills</h3>
						</div>
						<div class="text-xl flex gap-2 flex-wrap">
							{#each webSkills as item}
								<span class="inline-block py-1 px-3 rounded-md bg-white/20">{item}</span>
							{/each}
						</div>
					</div>

					<div class="mb-10">
						<div class="mb-3">
							<h3>Tools</h3>
						</div>
						<div class="text-xl flex gap-2 flex-wrap">
							{#each webTools as item}
								<span class="inline-block py-1 px-3 rounded-md bg-white/20">{item}</span>
							{/each}
						</div>
					</div>
				</div>
				<div>
					<div>
						<div class="mb-3">
							<h2 class="text-2xl font-bold">Graphic Design</h2>
						</div>
						<div class="grid grid-cols-2 gap-4 mb-10">
							<div>
								<h4 class="text-base">Title</h4>
								<div class="text-2xl">Designer</div>
							</div>

							<div>
								<h4 class="text-base">Experience</h4>
								<div class="text-2xl">10 years</div>
							</div>
						</div>

						<div class="mb-10">
							<div class="mb-3">
								<h3>Core Skills</h3>
							</div>
							<div class="text-xl flex gap-2 flex-wrap">
								{#each graphicSkills as item}
									<span class="inline-block py-1 px-3 rounded-md bg-white/20">{item}</span>
								{/each}
							</div>
						</div>

						<div class="mb-10">
							<div class="mb-3">
								<h3>Tools</h3>
							</div>
							<div class="text-xl flex gap-2 flex-wrap">
								{#each graphicTools as item}
									<span class="inline-block py-1 px-3 rounded-md bg-white/20">{item}</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="max-w-2xl p-10 md:p-20 pb-0">
			<h3 class="text-3xl mb-3">Labour Unions ❤️</h3>
			<p class="text-xl">
				I never want to undermine a Union's power. I have first-hand experience organising and being
				part of a union—shout out to <a class="link" href="https://kickstarterunited.org"
					>Kickstarter United</a
				>—and I understand how companies use freelancers to undermine and dilute the strength of
				bargaining units. I want to be a freelancer for my own freedom and peace of mind but never
				at the expense of Workers and their collective power. If I am working for your employer and
				you feel that my presence is making it harder for you to organise or bargain, please contact
				me and I will do what I can to end my contract as soon as possible. Solidarity forever.
			</p>
		</div>
	</div>
	<div class="p-10 md:p-20">
		<Footer />
	</div>
</main>
