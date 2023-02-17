import { describe, it, expect } from 'vitest';
import { getIndexUrls } from './getIndexUrls';

describe('getIndexUrls', () => {
	it('handles root pathname', () => {
		const testPaths = ['./things.md', './cool/+page.svelte'];

		expect(getIndexUrls(testPaths, '/').at(0)?.href).toStrictEqual('/things/');
		expect(getIndexUrls(testPaths, '/').at(1)?.href).toStrictEqual('/cool/');
	});

	it('handles setting base URL', () => {
		const testPaths = ['./things.md'];

		expect(getIndexUrls(testPaths, '/projects').at(0)?.href).toStrictEqual('/projects/things/');
	});

	describe('filtering', () => {
		it('filters out directory root', () => {
			const testPaths = ['./+page.svelte'];

			expect(getIndexUrls(testPaths, '/').length).toBe(0);
		});

		it('filters out non-page files', () => {
			const testPaths = [
				'./+page.server.ts',
				'./colour-palettes/ColorGradations.svelte',
				'./colour-palettes/color-utils.ts'
			];

			expect(getIndexUrls(testPaths, '/').length).toBe(0);
		});
	});
});

// +page.md
// +page.svelte

// ./1.md
// ./2.md
// [slug]/+page.svelte
