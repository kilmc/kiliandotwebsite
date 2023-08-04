export type ReleaseMetadata = {
	artist: string;
	artistSlug: string;
	releaseDate: string;
	release: string;
	releaseSlug: string;
	tracks: string[];
	links?: {
		bandcamp?: string;
		spotify?: string;
		apple?: string;
	};
};

type Releases = {
	[k: string]: {
		metadata: ReleaseMetadata;
		mdx?: App.MdsvexFile;
	};
};

const releasesJSON: Record<string, ReleaseMetadata> = import.meta.glob('./*.json', { eager: true });
const releasesMDX: Record<string, App.MdsvexFile> = import.meta.glob('./*.md', {
	eager: true
});

export const releases = Object.entries(releasesJSON).reduce<Releases>(
	(accum, [fileName, metadata]) => {
		const baseName = fileName.replace('./', '').replace('.json', '');
		const mdx = Object.entries(releasesMDX).find(([fileName]) => fileName.includes(baseName))?.[1];

		if (!accum[baseName]) {
			accum[baseName] = {
				metadata,
				mdx: mdx
			};
		}
		return accum;
	},
	{}
);
