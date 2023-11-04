import { describe, expect, it } from 'vitest';
import { parseKeyName } from './parseKeyName';

describe('parseKeyName', () => {
	const scaleURLs = [
		{ input: 'c-major', result: 'C major' },
		{ input: 'b-sharp-major', result: 'B# major' },
		{ input: 'd-flat-major', result: 'Db major' },
		{ input: 'e-flat-locrian', result: 'Eb locrian' },
		{ input: 'a-sharp-harmonic-minor', result: 'A# harmonic minor' },
		{ input: 'c-melodic-minor', result: 'C melodic minor' }
	];
	it.each(scaleURLs)('handles $input', ({ input, result }) => {
		expect(parseKeyName(input)).toBe(result);
	});
});
