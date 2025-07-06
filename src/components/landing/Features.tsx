import { FC } from 'react';

export const Features: FC = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto p-4 text-center md:p-8">
				<h3 className="text-3xl font-semibold sm:text-4xl">Why Use Our Converter?</h3>
				<p className="mx-auto mt-4 max-w-3xl text-neutral-500">
					Skip the setup — convert OpenAPI specs to Postman collections instantly in your browser. No sign-up, no
					dependencies.
				</p>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">⚡ Fast & Simple</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Paste your OpenAPI spec and get a Postman collection in seconds — no config or install required.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🔒 Local & Private</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Everything runs in your browser. Your API definitions never leave your device.
						</p>
					</div>
					<div className="rounded-xl border border-neutral-800 p-6 shadow-sm">
						<h4 className="text-lg font-semibold">🧩 Format Flexible</h4>
						<p className="mt-2 text-sm text-neutral-500">
							Supports both JSON and YAML — OpenAPI v3 and v2 — and outputs clean, import-ready Postman v2 collections.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
