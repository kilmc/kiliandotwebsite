import { describe, expect, it } from 'vitest';
import { convertKeyToURL } from './helpers';

describe('convertKeyToURL', () => {
	it('returns major urls', () => {
		expect(convertKeyToURL('C major')).toBe('/tools/music/keys/c-major');
	});

	it('returns mode urls', () => {
		expect(convertKeyToURL('A ionian')).toBe('/tools/music/keys/a-ionian');
		expect(convertKeyToURL('B dorian')).toBe('/tools/music/keys/b-dorian');
		expect(convertKeyToURL('C phrygian')).toBe('/tools/music/keys/c-phrygian');
		expect(convertKeyToURL('D lydian')).toBe('/tools/music/keys/d-lydian');
		expect(convertKeyToURL('E mixolydian')).toBe('/tools/music/keys/e-mixolydian');
		expect(convertKeyToURL('F aeolian')).toBe('/tools/music/keys/f-aeolian');
		expect(convertKeyToURL('G locrian')).toBe('/tools/music/keys/g-locrian');
	});

	it('returns mode urls', () => {
		expect(convertKeyToURL('Bb major')).toBe('/tools/music/keys/b-flat-major');
		expect(convertKeyToURL('C# minor')).toBe('/tools/music/keys/c-sharp-minor');
	});
});
