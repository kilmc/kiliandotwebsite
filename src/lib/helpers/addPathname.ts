import type { LinkItem } from '$lib/types';

export const addPathname = (items: LinkItem[], pathname: string): LinkItem[] => {
	return items.map((item) => {
		return {
			...item,
			href: `${pathname}${item.href}`
		};
	});
};
