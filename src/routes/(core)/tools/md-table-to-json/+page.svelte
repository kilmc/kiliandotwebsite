<script lang="ts">
	type Option = {
		current: string;
		new: string;
		included: boolean;
	};

	let inputText = `#	Title	Artist	Release
1	LLYLM	ROSALÍA	Single
2	Kill Bill	SZA	SOS
3	Fog Machine	White Reaper	Asking For A Ride
4	ten	Fred Again..	Single
5	Satanist	Boygenius	the record
6	All a Bit Too Loud	Tom Rosenthal	Single
7	Deep in the Night	Future Islands	Single
8	Nadja	Unknown Mortal Orchestra	V
9	Shit Talk	Sufjan Stevens	Javelin
10	Big Hammer	James Blake	Playing Robots Into Heaven
11	Leave Me Like This	Skrillex	Quest for Fire
12	Gorilla	Little Simz	NO THANK YOU
13	Blue	Vulfmon, Jacob Jeffries	Vulfnik
14	Paul McCarthy	Mike Viola	Paul McCarthy
15	Oh God	Miya Folick	ROACH
16	Unholy	Sam Smith, Kim Petras	Gloria
17	I Want To Be Your Only Pet	Bombay Bicycle Club	My Big Day
18	Odyssey	Beck, Phoenix	Single
19	DAGAGA	BULGOGIDISCO	DAGAGA
20	Mouth of God	All Tvvins	Your Country
21	That's Physics, Baby	Pool Kids	Self Titled
22	Gabriel	Daryl Jones	Single
23	Smoke Screen	PUP	Single
24	This	OKGO	Single
25	Bogus Operandi	The Hives	The Death of Randy Fitzsimmons`;

	const convertMarkdownTableToJSON = (input: string, options: Option[]) => {
		const [rawHeaders, ...rawRows] = input.split('\n');
		const headers = rawHeaders.split('\t');

		const convertedRows = rawRows
			.map((rawRow) => {
				const row = rawRow
					.split('\t')
					.map((col, i) => {
						const currentOption = options.find((option) => option.current === headers[i]);
						if (currentOption && currentOption.included) {
							return `"${currentOption.new}": "${col}"`;
						}
					})
					.filter(Boolean);

				return row;
			})
			.map((row) => `{ ${row} },`)
			.join('\n');

		return `[${convertedRows}]`;
	};

	const handleRename = (e: SvelteInputEvent, option: Option) => {
		if (!(e?.target instanceof HTMLInputElement)) return;

		const optionIndex = headerOptions.findIndex(
			(headerOption) => headerOption.current === option.current
		);
		const newOption = { ...option, new: e.target.value };

		headerOptions = headerOptions.map((headerOption, i) => {
			if (i === optionIndex) {
				return newOption;
			} else {
				return headerOption;
			}
		});
	};

	const handleIncluded = (e: SvelteInputEvent, option: Option) => {
		if (!(e?.target instanceof HTMLInputElement)) return;

		const optionIndex = headerOptions.findIndex(
			(headerOption) => headerOption.current === option.current
		);
		const newOption = { ...option, included: e.target.checked };

		headerOptions = headerOptions.map((headerOption, i) => {
			if (i === optionIndex) {
				return newOption;
			} else {
				return headerOption;
			}
		});
	};

	let initHeaderOptions: Option[] = inputText
		.split('\n')[0]
		.split('\t')
		.map((header) => {
			return {
				current: header,
				new: header,
				included: true
			};
		});

	$: displayOptions = inputText
		.split('\n')[0]
		.split('\t')
		.map((header) => {
			return {
				current: header,
				new: header,
				included: true
			};
		});

	let headerOptions = initHeaderOptions;

	$: outputText = convertMarkdownTableToJSON(inputText, headerOptions);
</script>

<h3>Markdown To JSON</h3>

<div class="grid grid-cols-2 gap-4 mb-4">
	<textarea class="border-black border rounded-sm p-4 text-black" bind:value={inputText}></textarea>
	<div class="flex flex-col">
		{#each initHeaderOptions as option}
			<div class="flex items-center">
				<label class="flex flex-col">
					<div>Rename "{option.current}" to</div>
					<input
						type="text"
						on:keyup={(e) => handleRename(e, option)}
						value={option.current}
						class="border border-black px-2 text-black"
					/>
				</label>
				<label>
					<input
						type="checkbox"
						on:change={(e) => handleIncluded(e, option)}
						checked={option.included}
						name="headers"
					/>
				</label>
			</div>
		{/each}
	</div>
</div>

<div>
	<div class="dark:bg-zinc-800 bg-zinc-100 p-4 overflow-scroll rounded-sm">
		<pre>{outputText}</pre>
	</div>
</div>
