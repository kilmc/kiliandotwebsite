import { encode } from 'json-midi-encoder';
import type { IMidiFile } from 'midi-json-parser-worker';

const json: IMidiFile = {
	division: 480,
	format: 1,
	tracks: [
		[
			{
				delta: 0,
				trackName: 'example'
			},
			{
				delta: 0,
				endOfTrack: true
			}
		]
	]
};

export async function GET() {
	const midi = await encode(json);

	return {
		status: 200,
		headers: {
			'Content-type': 'audio/midi',
			'Content-Disposition': 'attachment; filename=c-major.mid'
		},
		body: midi
	};
}
