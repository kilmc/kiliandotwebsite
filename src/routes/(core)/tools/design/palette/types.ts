export type HSLColor = {
	h: number;
	s: number;
	l: number;
};

export type Color = {
	name: string;
	graduation: number;
	value: HSLColor;
};
