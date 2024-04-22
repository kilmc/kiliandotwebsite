import type { PageLoad } from './$types';
import { jobs } from '$lib/db/jobs';
import { getTimeSpanString } from '$lib/helpers/date';

export const load = (({ params, url }) => {
	const file = Object.values(jobs).find((file) => file.metadata?.slug === params.slug);
	const timeSpan = getTimeSpanString(file?.metadata?.startDate, file?.metadata?.endDate);
	if (file !== undefined && file.metadata) {
		return {
			company: file.metadata.company,
			role: file.metadata.role,
			title: file.metadata.title,
			linkURL: file.metadata.linkURL,
			linkTitle: file.metadata.linkTitle,
			content: file.default,
			pageURL: url.pathname,
			skills: file.metadata.skills,
			poster: `/images/posters/project-${file.metadata.slug}.png`,
			timeSpan: timeSpan
		};
	}
}) satisfies PageLoad;
