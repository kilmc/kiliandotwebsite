export type Loosey = {
	fileName: string;
	title: string;
	description?: string;
	year?: number;
	trackLength: number;
	tags?: string[];
};

export const loosies: Loosey[] = [
	{
		fileName: 'all-at-once',
		title: 'All At Once',
		trackLength: 108,
		tags: ['demo', 'song', 'emo']
	},
	{
		fileName: 'assemble-with-care-new',
		title: 'Assemble With Care',
		trackLength: 181,
		description: '',
		year: 2019,
		tags: ['electronic', 'chip']
	},
	{ fileName: 'boppy', title: 'Boppy', trackLength: 33, tags: ['electronic'] },
	{ fileName: 'cold-snap', title: 'Cold Snap', trackLength: 49, tags: ['beat', 'electronic'] },
	{
		fileName: 'dizzy-sworn-secret',
		title: 'Dizzy / Sworn Secret',
		description:
			'I started working on this back in 2017 while I was on vacation in New Zealand visiting my sister.',
		year: 2017,
		trackLength: 501,
		tags: ['electronic', 'chip']
	},
	{ fileName: 'hip-chip', title: 'Hip Chip', trackLength: 61, tags: ['electronic', 'chip'] },
	{ fileName: 'last-days', title: 'Last Days', trackLength: 48, tags: ['piano', 'solo'] },
	{
		fileName: 'midnight-droplets',
		title: 'Midnight Droplets',
		trackLength: 46,
		tags: ['op-1', 'electronic']
	},
	{ fileName: 'new-song', title: 'New Song', trackLength: 52, tags: ['electronic', 'chip'] },
	{ fileName: 'oh-my-goodness', trackLength: 108, title: 'Oh My Goodness', tags: ['electronic'] },
	{ fileName: 'parkway', trackLength: 139, title: 'Parkway', tags: ['electronic', 'chip'] },
	{
		fileName: 'probably',
		trackLength: 51,
		title: 'Probably',
		description: '',
		year: 2023,
		tags: ['demo', 'pop/punk']
	},
	{ fileName: 'samus', trackLength: 72, title: 'Samus', tags: ['electronic', 'new wave'] },
	{
		fileName: 'several-streets-over',
		title: 'Several Streets Over',
		description:
			'I wanted to try and make some Pop/Punk stuff on my laptop and after discovering how good the amp and pedal modelling are in Logic X as well as EZDrummer it made it so easy to make decent sounding demos.',
		year: 2023,
		trackLength: 36,
		tags: ['demo', 'pop/punk']
	},
	{
		fileName: 'soul-meets-body',
		trackLength: 207,
		title: 'Soul Meets Body',
		year: 2010,
		tags: ['chip', 'cover']
	},
	{ fileName: 'the-vale', trackLength: 54, title: 'The Vale', tags: ['chip', 'electronic'] },
	{ fileName: 'thumper', trackLength: 70, title: 'Thumper', tags: ['electronic', 'dance'] },
	{ fileName: 'toasted-fog', trackLength: 29, title: 'Toasted Fog', tags: ['chip', 'electronic'] },
	{ fileName: 'utc-2', trackLength: 110, title: 'UTC', tags: ['chip', 'electronic'] },
	{ fileName: 'vale', trackLength: 114, title: 'Vale', tags: ['electronic', 'spooky'] },
	{
		fileName: 'walking-home-in-the-twilight',
		trackLength: 61,
		title: 'Walking Home in the Twilight',
		tags: ['op-1', 'electronic']
	},
	{ fileName: 'window', trackLength: 27, title: 'Window', tags: ['electronic', 'beat', 'chip'] }
];
