import Link from 'next/link';
import { FC } from 'react';

export const CallToAction: FC = () => {
	return (
		<section className="w-full py-16">
			<div className="mx-auto flex max-w-3xl flex-col gap-y-8 text-center">
				<h3 className="text-2xl font-bold sm:text-3xl">Convert OpenAPI to Postman Collection</h3>
				<p className="text-neutral-500">
					Paste your OpenAPI spec (YAML or JSON) and instantly get a ready-to-import Postman v2 collection — no sign-up,
					no server, 100% browser-based.
				</p>
				<div>
					<Link href="/">
						<button
							type="button"
							className="cursor-pointer rounded-full border border-neutral-800 px-6 py-3 transition hover:bg-neutral-800">
							Launch App
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
