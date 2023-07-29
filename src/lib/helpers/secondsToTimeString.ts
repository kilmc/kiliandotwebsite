export function secondsToTimeString(inSeconds: number) {
	const wholeSeconds = Math.round(inSeconds);
	const seconds = wholeSeconds % 60;
	const minutes = String((wholeSeconds - seconds) / 60);

	return `${minutes}:${String(seconds).padStart(2, '0')}`;
}
