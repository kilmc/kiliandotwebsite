// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}

	interface MdsvexFile<Metadata = Record<string, string>> {
		default: import('svelte/internal').ConstructorOfATypedSvelteComponent;
		metadata?: Metadata;
	}

	type MdsvexResolver = () => Promise<MdsvexFile>;

	interface Post {
		slug: string;
		title: string;
		description: string;
		date: string;
		published: boolean;
	}
}

declare namespace svelte.JSX {
	interface HTMLProps {
		oncopied?: (event: CustomEvent<string>) => void;
		'oncopied:error'?: (event: CustomEvent<Error>) => void;
	}
}

type SvelteKeyboardEvent = KeyboardEvent & {
	currentTarget: EventTarget & HTMLDivElement;
};

type SvelteMouseEvent = MouseEvent & {
	currentTarget: EventTarget & HTMLDivElement;
};

type SvelteInputEvent = Event & { currentTarget: EventTarget & HTMLInputElement };
