import { describe, it, expect } from 'vitest';
import { getTimeBetweenDates } from './date';

describe('getTimeBetweenDates', () => {
	it('handles dates in oldest to more recent', () => {
		expect(getTimeBetweenDates(new Date('1990-10-10'), new Date('2030-10-10'))).toStrictEqual({
			years: 40,
			months: 0
		});
	});

	it('things', () => {
		expect(getTimeBetweenDates(new Date('2010-10-10'), new Date('2010-12-31'))).toStrictEqual({
			years: 0,
			months: 2
		});
	});
});
