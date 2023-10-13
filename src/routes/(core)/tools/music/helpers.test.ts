import { describe, expect, it } from 'vitest';
import { convertKeyToURL } from './helpers';

describe('convertKeyToURL', () => {
	it('returns major urls', () => {
		expect(convertKeyToURL('C major')).toBe('/tools/music/key/c-major');
		expect(convertKeyToURL('c major')).toBe('/tools/music/key/c-major');
		expect(convertKeyToURL('c Major')).toBe('/tools/music/key/c-major');
	});

	it('returns mode urls', () => {
		expect(convertKeyToURL('A ionian')).toBe('/tools/music/key/a-major');
		expect(convertKeyToURL('B dorian')).toBe('/tools/music/key/b-dorian');
		expect(convertKeyToURL('C phrygian')).toBe('/tools/music/key/c-phrygian');
		expect(convertKeyToURL('D lydian')).toBe('/tools/music/key/d-lydian');
		expect(convertKeyToURL('E mixolydian')).toBe('/tools/music/key/e-mixolydian');
		expect(convertKeyToURL('F aeolian')).toBe('/tools/music/key/f-minor');
		expect(convertKeyToURL('G locrian')).toBe('/tools/music/key/g-locrian');
	});

	it('returns mode urls', () => {
		expect(convertKeyToURL('Bb major')).toBe('/tools/music/key/b-flat-major');
		expect(convertKeyToURL('C# minor')).toBe('/tools/music/key/c-sharp-minor');
	});
});
