import { groupBy } from '$lib/helpers/array';
import { getTimeBetweenDates, getTimeSpanString, timePeriodToString } from '$lib/helpers/date';

type Metadata = {
	title: string;
	company: string;
	role: string;
	slug: string;
	linkURL?: string;
	linkTitle?: string;
	startDate?: string;
	endDate?: string;
	skills?: string[];
};

type Job = {
	title?: string;
	company?: string;
	role?: string;
	timeSpan: string;
	startDate?: string;
	endDate?: string;
	url: string;
};

export const jobs: Record<string, App.MdsvexFile<Metadata>> = import.meta.glob('./*.md', {
	eager: true
});

export const jobsIndex = Object.values(jobs).map((item) => {
	const posterSlug = item.metadata?.slug ?? 'default';
	return {
		url: item.metadata?.slug,
		text: item.metadata?.title,
		company: item.metadata?.company,
		role: item.metadata?.company,
		startDate: item.metadata?.startDate,
		endDate: item.metadata?.endDate,
		poster: `/images/posters/project-${posterSlug}.png`,
		header: `/images/posters/header-${posterSlug}.png`,
		skills: item.metadata?.skills ?? []
	};
});

const jobMetadata = Object.values(jobs)
	.map((job) => job.metadata)
	.filter(Boolean);

export const getJobsByEmployer = (): [{ name: string; years: string }, Job[]][] =>
	Object.entries(groupBy(jobMetadata, 'company'))
		.sort((a, b) => {
			const aEndYear = a[1]
				.map((i) => new Date(i.endDate || '').getFullYear())
				.sort((aa, bb) => bb - aa)[0];
			const bEndYear = b[1]
				.map((i) => new Date(i.endDate || '').getFullYear())
				.sort((aa, bb) => bb - aa)[0];

			return bEndYear - aEndYear;
		})
		.map(([company, jobs]) => {
			const sortedJobs = jobs
				.sort((a, b) => {
					const aStartYear = new Date(a.startDate ?? '').getFullYear();
					const bStartYear = new Date(b.startDate ?? '').getFullYear();
					const aEndYear = new Date(a.endDate ?? '').getFullYear();
					const bEndYear = new Date(b.endDate ?? '').getFullYear();

					return aStartYear === bStartYear ? bEndYear - aEndYear : bStartYear - aStartYear;
				})
				.map((item): Job => {
					return {
						company: item?.company,
						title: item?.title,
						role: item?.role,
						timeSpan: getTimeSpanString(item?.startDate ?? '', item?.endDate ?? ''),
						startDate: item?.startDate,
						endDate: item?.endDate,
						url: `/work/${item.slug}`
					};
				});
			const companyStart = new Date(sortedJobs.at(-1)?.startDate || '');
			const companyEnd = new Date(sortedJobs.at(0)?.endDate || '');

			const companyTimeSpan = timePeriodToString(getTimeBetweenDates(companyStart, companyEnd));

			return [{ name: company, years: companyTimeSpan }, sortedJobs];
		});
