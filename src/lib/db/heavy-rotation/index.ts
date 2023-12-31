export type HeavyRotationItem = {
	releaseTitle: string;
	artist: string;
	artwork: string;
};

const heavyRotationFiles: Record<string, App.MdsvexFile<HeavyRotationItem[]>> = import.meta.glob(
	'./*.json',
	{
		eager: true
	}
);

type HeavyRotationEntries = {
	[k: string]: HeavyRotationItem[];
};

const cleanDate = (str: string) => str.replace(/.*(\d{4}-\d{2}).*/, '$1');

export const heavyRotationMonths: HeavyRotationEntries = Object.entries(heavyRotationFiles)
	.sort(([a], [b]) => {
		const aDate = new Date(cleanDate(a));
		const bDate = new Date(cleanDate(b));

		if (!aDate || !bDate) return 0;

		return bDate.valueOf() - aDate.valueOf();
	})
	.reduce<HeavyRotationEntries>((acc, [fileName, contents]) => {
		const dateStr = cleanDate(fileName);
		acc[dateStr] = contents.default;

		return acc;
	}, {});
