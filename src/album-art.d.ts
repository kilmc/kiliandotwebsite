declare module 'album-art' {
	interface Options {
		size?: 'small' | 'medium' | 'large';
		album?: string;
	}
	export default function albumArt(title: string, options?: Options): Promise<string>;
}
