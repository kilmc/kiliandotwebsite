import type { LinkItem } from '$lib/types';

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
		href: list.category
	};
});

export const yearEndLinkItems: LinkItem[] = yearEnd.map((list) => {
	return {
		text: list.category,
		href: `${list.year}/${list.category}`,
		group: list.year
	};
});
