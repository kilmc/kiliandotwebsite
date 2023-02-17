import type { LinkItem } from '$lib/types';
import { startCase } from 'lodash-es';

export const getIndexUrls = (paths: string[], pathname: string): LinkItem[] => {
	const strippedPathname = pathname.replace('/', '');
	return paths
		.filter((path) => /(\+page\.svelte|\.md)$/.test(path))
		.map((path) => path.replace('./', ''))
		.map((path) => path.replace(/(\+page\.svelte|\.md)/, ''))
		.filter((path) => path.length > 0)
		.map((path) => path.replace('/', ''))
		.map((path) => {
			const pathnamePrefix = strippedPathname.length === 0 ? '/' : `/${strippedPathname}/`;
			return {
				text: startCase(path),
				href: `${pathnamePrefix}${path}/`
			};
		});
};
