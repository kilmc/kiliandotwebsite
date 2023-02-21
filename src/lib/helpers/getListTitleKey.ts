import type { ListCategory, ListItem } from '$lib/db/lists';

export function getListTitleKey(category: ListCategory): keyof ListItem {
	return category === 'albums' ? 'release' : 'title';
}
