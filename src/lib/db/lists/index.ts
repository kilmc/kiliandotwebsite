type ListType = 'best-of';
type ListCategory = 'music';
type ListSubCategory = 'songs' | 'eps' | 'albums';

type ListItem = {
	title: string;
	artist?: string;
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
