import { CallToAction } from '@openapi2postmanv2/components/landing/CallToAction';
import { Features } from '@openapi2postmanv2/components/landing/Features';
import { Footer } from '@openapi2postmanv2/components/landing/Footer';
import { Hero } from '@openapi2postmanv2/components/landing/Hero';
import { Navbar } from '@openapi2postmanv2/components/shared/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className="w-full border-t border-neutral-800" />
			<Hero />
			<div className="w-full border-t border-neutral-800" />
			<Features />
			<div className="w-full border-t border-neutral-800" />
			<CallToAction />
			<div className="w-full border-t border-neutral-800" />
			<Footer />
		</>
	);
};

export default HomePage;
