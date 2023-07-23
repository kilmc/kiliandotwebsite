import type { PageLoad } from './$types';
import { releases } from '$lib/db/releases';

export const load = (({ params }) => {
	const file = Object.values(releases).find(
		(release) =>
			release.metadata.artistSlug === params.artist &&
			release.metadata.releaseSlug === params.release
	);

	if (file !== undefined) {
		return {
			artist: file.metadata.artist,
			release: file.metadata.release,
			tracks: file.metadata.tracks || [],
			content: file.mdx?.default,
			links: file.metadata.links
		};
	}
}) satisfies PageLoad;
