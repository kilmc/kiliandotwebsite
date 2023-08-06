import type { Action } from 'svelte/action';

export const clipboard: Action<HTMLElement, { text: string } | undefined> = (node, coreParams) => {
	if (coreParams === undefined) {
		return;
	}

	const handle = async () => {
		if (coreParams.text)
			await navigator.clipboard.writeText(coreParams.text).then(
				() =>
					node.dispatchEvent(new CustomEvent('copied', { detail: { clipboard: coreParams.text } })),
				(e) => node.dispatchEvent(new CustomEvent('error', { detail: { error: e } }))
			);
	};

	node.addEventListener('click', handle, true);

	return {
		update: (params) => {
			if (params !== undefined && coreParams.text.length !== 0) coreParams.text = params.text;
		},
		destroy() {
			node.removeEventListener('click', handle, true);
		}
	};
};
