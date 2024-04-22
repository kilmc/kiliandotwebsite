export const pluralise = (count: number, rawUnit: string) => {
	let unit = rawUnit;
	if (count !== 1) {
		unit = rawUnit + 's';
	}

	return `${count} ${unit}`;
};
