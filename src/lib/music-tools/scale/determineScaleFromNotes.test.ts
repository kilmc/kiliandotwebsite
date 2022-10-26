import { describe, expect, it } from 'vitest';
import { determineScaleFromNotes } from './determineScaleFromNotes';

describe('determineScaleFromNotes', () => {
	it('returns a scale', () => {
		expect(
			determineScaleFromNotes({
				melody: ['E', 'Gb', 'Ab', 'B', 'Db'],
				bassline: ['A', 'C#', 'E', 'G#']
			})
		).toBe('E major');
	});
});
