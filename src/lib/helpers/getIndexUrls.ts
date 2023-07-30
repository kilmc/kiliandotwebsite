import type { LinkItem } from '$lib/types';
import { startCase } from 'lodash-es';

export const getIndexUrls = (
	paths: string[],
	pathname: string,
	filemask = /(\+page\.svelte|\.md)$/
): LinkItem[] => {
	const strippedPathname = pathname.replace('/', '');
	return paths
		.filter((path) => filemask.test(path))
		.map((path) => path.replace('./', ''))
		.map((path) => path.replace(filemask, ''))
		.filter((path) => path.length > 0)
		.map((path) => path.replace('/', ''))
		.map((path) => {
			const pathnamePrefix = strippedPathname.length === 0 ? '/' : `/${strippedPathname}/`;
			return {
				text: startCase(path),
				url: `${pathnamePrefix}${path}/`.toLowerCase()
			};
		});
};
