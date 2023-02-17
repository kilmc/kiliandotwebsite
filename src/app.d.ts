// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}

	interface MdsvexFile {
		default: import('svelte/internal').ConstructorOfATypedSvelteComponent;
		metadata: Record<string, string>;
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

declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		'on:copied'?: (event: CustomEvent<string>) => void;
		'on:copied:error'?: (event: CustomEvent<Error>) => void;
	}
}
