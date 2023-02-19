export const groupBy = <T extends Record<PropertyKey, any>, K extends keyof T>(
	items: T[],
	key: K
) =>
	items.reduce((acc, item) => {
		const newKey = item[key];
		if (acc[newKey]) {
			acc[newKey].push(item);
		} else {
			acc[newKey] = [item];
		}

		return acc;
	}, {} as Record<T[K], T[]>);
