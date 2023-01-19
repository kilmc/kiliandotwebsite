export type ListType = 'best-of';
export type ListCategory = 'music';
export type ListSubCategory = 'songs' | 'eps' | 'albums';

export type ListItem = {
	title: string;
	artist?: string;
	imageUrl?: string;
	release?: string;
};

export type List = {
	title: string;
	category: ListCategory;
	subCategory: ListSubCategory;
	type: ListType;
	year: number;
	items: ListItem[];
};

const files: Record<string, List> = import.meta.glob('./*.json', { eager: true });
export const lists = Object.values(files);
