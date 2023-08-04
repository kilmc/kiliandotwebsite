import type { PageLoad } from './$types';
import { releases } from '$lib/db/releases';

export const load = (({ url }) => {
	const releaseItems = Object.values(releases)
		.map(({ metadata }) => metadata)
		.map((release) => {
			return {
				url: `${url.pathname}/releases/${release.artistSlug}/${release.releaseSlug}`.replace(
					'//',
					'/'
				),
				artist: release.artist,
				release: release.release,
				releaseDate: new Date(release.releaseDate)
			};
		})
		.sort((a, b) => b.releaseDate.valueOf() - a.releaseDate.valueOf());
	console.log(releaseItems);
	return {
		releaseItems
	};
}) satisfies PageLoad;
