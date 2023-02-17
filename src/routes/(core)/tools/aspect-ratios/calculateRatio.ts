const intersection = <T>(arr1: T[], arr2: T[]) =>
	arr1.length > arr2.length
		? arr1.filter((x) => arr2.indexOf(x) !== -1)
		: arr2.filter((x) => arr1.indexOf(x) !== -1);

const factors = (number: number) =>
	Array.from(Array(number), (_, i) => i).filter((i) => number % i === 0);

export const calculateRatio = (width: number, height: number) => {
	const gcf = Math.max.apply(null, intersection(factors(width), factors(height)));
	return [width / gcf, height / gcf];
};
