export type Loosey = {
	fileName: string;
	title: string;
	description?: string;
	year?: number;
	trackLength: number;
	tags?: string[];
	date?: string;
};

export const loosies: Loosey[] = [
	{
		fileName: 'all-at-once',
		title: 'All At Once',
		trackLength: 108,
		tags: ['demo', 'song', 'emo'],
		date: '2020-05-17'
	},
	{
		fileName: 'assemble-with-care-new',
		title: 'Assemble With Care',
		trackLength: 181,
		description: '',
		year: 2019,
		tags: ['electronic', 'chip'],
		date: '2019-10-28'
	},
	{ fileName: 'boppy', title: 'Boppy', trackLength: 33, tags: ['electronic'], date: '2022-07-09' },
	{
		fileName: 'cold-snap',
		title: 'Cold Snap',
		trackLength: 49,
		tags: ['beat', 'electronic'],
		date: '2021-02-03'
	},
	{
		fileName: 'dizzy-sworn-secret',
		title: 'Dizzy / Sworn Secret',
		description:
			'I started working on this back in 2017 while I was on vacation in New Zealand visiting my sister.',
		year: 2017,
		trackLength: 501,
		tags: ['electronic', 'chip'],
		date: '2017-03-10'
	},
	{
		fileName: 'hip-chip',
		title: 'Hip Chip',
		trackLength: 61,
		tags: ['electronic', 'chip'],
		date: '2013-06-07'
	},
	{
		fileName: 'last-days',
		title: 'Last Days',
		trackLength: 48,
		tags: ['piano', 'solo'],
		date: '2023-04-22'
	},
	{
		fileName: 'midnight-droplets',
		title: 'Midnight Droplets',
		trackLength: 46,
		tags: ['op-1', 'electronic'],
		date: '2021-08-10'
	},
	{
		fileName: 'new-song',
		title: 'New Song',
		trackLength: 52,
		tags: ['electronic', 'chip'],
		date: '2010-03-06'
	},
	{
		fileName: 'oh-my-goodness',
		trackLength: 108,
		title: 'Oh My Goodness',
		tags: ['electronic'],
		date: '2023-07-26'
	},
	{
		fileName: 'parkway',
		trackLength: 139,
		title: 'Parkway',
		tags: ['electronic', 'chip'],
		date: '2016-08-16'
	},
	{
		fileName: 'probably',
		trackLength: 51,
		title: 'Probably',
		description: '',
		year: 2023,
		tags: ['demo', 'pop/punk'],
		date: '2023-07-26'
	},
	{
		fileName: 'samus',
		trackLength: 72,
		title: 'Samus',
		tags: ['electronic', 'new wave'],
		date: '2015-11-16'
	},
	{
		fileName: 'several-streets-over',
		title: 'Several Streets Over',
		description:
			'I wanted to try and make some Pop/Punk stuff on my laptop and after discovering how good the amp and pedal modelling are in Logic X as well as EZDrummer it made it so easy to make decent sounding demos.',
		year: 2023,
		trackLength: 36,
		tags: ['demo', 'pop/punk'],
		date: '2023-02-01'
	},
	{
		fileName: 'soul-meets-body',
		trackLength: 207,
		title: 'Soul Meets Body',
		year: 2010,
		tags: ['chip', 'cover'],
		date: '2012-12-04'
	},
	{
		fileName: 'the-vale',
		trackLength: 54,
		title: 'The Vale',
		tags: ['chip', 'electronic'],
		date: '2021-12-05'
	},
	{
		fileName: 'thumper',
		trackLength: 70,
		title: 'Thumper',
		tags: ['electronic', 'dance'],
		date: '2021-11-15'
	},
	{
		fileName: 'toasted-fog',
		trackLength: 29,
		title: 'Toasted Fog',
		tags: ['chip', 'electronic'],
		date: '2021-11-20'
	},
	{
		fileName: 'utc-2',
		trackLength: 110,
		title: 'UTC',
		tags: ['chip', 'electronic'],
		date: '2022-10-30'
	},
	{
		fileName: 'vale',
		trackLength: 114,
		title: 'Vale',
		tags: ['electronic', 'spooky'],
		date: '2020-12-31'
	},
	{
		fileName: 'walking-home-in-the-twilight',
		trackLength: 61,
		title: 'Walking Home in the Twilight',
		tags: ['op-1', 'electronic'],
		date: '2021-08-09'
	},
	{
		fileName: 'window',
		trackLength: 27,
		title: 'Window',
		tags: ['electronic', 'beat', 'chip'],
		date: '2019-12-31'
	},
	{
		fileName: 'house-of-fall',
		trackLength: 107,
		title: 'House Of Fall',
		tags: ['spooky'],
		date: '2022-04-23'
	}
];
