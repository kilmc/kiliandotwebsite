import type { PageLoad } from './$types';
import { releases } from '$lib/db/releases';

export const load = (() => {
	const files = Object.values(releases).map((file) => {
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
	});

	return {
		files
	};
}) satisfies PageLoad;
