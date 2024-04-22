import { pluralise } from './pluaralise';

type TimePeriod = {
	years: number;
	months: number;
};

export const getTimeBetweenDates = (startDate?: Date, endDate?: Date): TimePeriod => {
	if (startDate === undefined || endDate === undefined) return { years: 0, months: 0 };

	const timePeriodInMS = new Date(endDate).getTime() - new Date(startDate).getTime();
	const timePeriodYears = timePeriodInMS / (365 * 24 * 60 * 60 * 1000);
	const yearsPortion = Math.floor(timePeriodYears);
	const monthsPortion = Math.floor((timePeriodYears - yearsPortion) * 10);

	return {
		years: yearsPortion,
		months: monthsPortion
	};
};

export const timePeriodToString = (timePeriod: TimePeriod) => {
	const outArr = [];

	if (timePeriod.years) {
		outArr.push(pluralise(timePeriod.years, 'year'));
	}

	if (timePeriod.months) {
		outArr.push(pluralise(timePeriod.months, 'month'));
	}

	return outArr.join(', ');
};

export const getTimeSpanString = (start?: string, end?: string) => {
	if (start === undefined || end === undefined) {
		return 'Some amount of time';
	}

	const format: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short'
	};

	const startDate = new Date(start).toLocaleDateString('en-EN', format);
	const endDate = new Date(end).toLocaleDateString('en-EN', format);

	return `${startDate} – ${endDate}`;
};
