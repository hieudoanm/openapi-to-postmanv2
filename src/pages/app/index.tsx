/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navbar } from '@openapi2postmanv2/components/shared/Navbar';
import { NextPage } from 'next';
import { useState } from 'react';

export const INITIAL_OPEN_API = `openapi: 3.0.4
info:
  title: Sample API
  description: Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
  version: 0.1.9

servers:
  - url: http://api.example.com/v1
    description: Optional server description, e.g. Main (production) server
  - url: http://staging-api.example.com
    description: Optional server description, e.g. Internal staging server for testing

paths:
  /users:
    get:
      summary: Returns a list of users.
      description: Optional extended description in CommonMark or HTML.
      responses:
        "200": # status code
          description: A JSON array of user names
          content:
            application/json:
              schema:
                type: array
                items:
                  type: string
`;

const ConverterPage: NextPage = () => {
	const [{ input = INITIAL_OPEN_API, output = '', loading = false }, setState] = useState<{
		input: string;
		output: string;
		loading: boolean;
	}>({
		input: INITIAL_OPEN_API,
		output: '',
		loading: false,
	});

	const handleConvert = async () => {
		setState((previous) => ({ ...previous, loading: true, output: '' }));

		try {
			const res = await fetch('/api', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ content: input }),
			});

			if (!res.ok) {
				const err = await res.json();
				throw new Error(err?.error ?? 'Unknown error');
			}

			const result = await res.json();
			setState((previous) => ({ ...previous, output: JSON.stringify(result, null, 2) }));
		} catch (err: any) {
			setState((previous) => ({ ...previous, output: `Error: ${err.message}` }));
		} finally {
			setState((previous) => ({ ...previous, loading: false }));
		}
	};

	return (
		<div className="flex h-screen flex-col">
			<Navbar />
			<div className="w-full border-t border-neutral-800" />
			<div className="flex h-full grow flex-col gap-y-4 pb-4 md:gap-y-8 md:pb-8">
				<div className="grid grow grid-cols-2">
					<div className="col-span-1 h-full">
						<textarea
							value={input}
							onChange={(event) => setState((previous) => ({ ...previous, input: event.target.value }))}
							placeholder="Paste OpenAPI (JSON or YAML)"
							className="h-96 h-full w-full p-4 font-mono text-sm"
						/>
					</div>
					<div className="col-span-1 h-full">
						<textarea
							readOnly
							value={output}
							placeholder="Postman Collection v2"
							className="h-96 h-full w-full p-4 font-mono text-sm"
						/>
					</div>
				</div>
				<div className="px-4 md:px-8">
					<button
						onClick={handleConvert}
						disabled={loading}
						className="w-full rounded-full border border-neutral-800 px-8 py-4">
						{loading ? 'Converting...' : 'Convert'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConverterPage;
