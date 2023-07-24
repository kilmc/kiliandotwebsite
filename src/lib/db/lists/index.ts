import type { LinkItem } from '$lib/types';
import { capitalize } from 'lodash-es';

export type ListType = 'favourites' | 'yearEnd';
export type ListGroup = 'music';
export type ListCategory = 'songs' | 'eps' | 'albums' | 'films' | 'ios-games';

export type ListItem = {
	title: string;
	artist?: string;
	imageUrl?: string;
	release?: string;
};

export type List = {
	title: string;
	group: ListGroup;
	category: ListCategory;
	type: ListType;
	year: number;
	items: ListItem[];
	hidden?: boolean;
};

const files: Record<string, any> = import.meta.glob('./*.json', { eager: true });

export const lists: List[] = Object.values(files)
	.map((entry) => entry.default)
	.filter((list) => !list.hidden);
export const favourites = lists.filter((list) => list.type === 'favourites');
export const yearEnd = lists.filter((list) => list.type === 'yearEnd');

export const favouritesLinkItems: LinkItem[] = favourites.map((list) => {
	return {
		text: list.title,
		url: list.category
	};
});

export const yearEndLinkItems: LinkItem[] = yearEnd.map((list) => {
	return {
		title: `Best ${capitalize(list.category)} of ${list.year}`,
		text: list.category,
		url: `${list.year}/${list.category}`,
		group: list.year
	};
});

export const listsIndex = [...yearEndLinkItems];
