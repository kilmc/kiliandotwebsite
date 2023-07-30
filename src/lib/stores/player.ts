import { writable } from 'svelte/store';

export type CurrentTrack = {
	title: string;
	fileName: string;
};

export const currentTrack = writable<CurrentTrack>({
	fileName: 'all-at-once',
	title: 'All At Once'
});

export const autoPlay = writable(false);
export const showPlayer = writable(false);
