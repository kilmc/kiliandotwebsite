import type { PageLoad } from './$types';
import { releases } from '$lib/db/releases';

export const load = (({ params }) => {
	const file = Object.values(releases).find(
		(release) =>
			release.metadata.artistSlug === params.artist &&
			release.metadata.releaseSlug === params.release
	);

	if (file !== undefined) {
		const releaseDate = new Date(file.metadata.releaseDate).toLocaleDateString('en-EN', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
		return {
			artist: file.metadata.artist,
			release: file.metadata.release,
			releaseDate,
			tracks: file.metadata.tracks || [],
			content: file.mdx?.default,
			links: file.metadata.links
		};
	}
}) satisfies PageLoad;
