import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import LogoAnimate from '@images/logo-animate.gif';
// import Logo from '@images/logo1.png';
import Button from '@widget/Button';
import { useAuth } from '@contexts/authContext';
import Link from 'next/link';
// const { user, setUser } = useAuth();

const Home = (props: { isMobile: any }) => {
	const { user, setUser } = useAuth();
	console.log('this the root application', user);

	// TODO: to be changes to landing page

	return (
		<div className=" h-screen w-screen relative  bg-pri">
			<SEO title="home" />

			<div className="home px-4 ">
				<h1 className="head text-black text-2xl capitalize font-std-bold">
					campus store ecommerce platform
				</h1>
				<p className="font-std-sm">get what you need at your own comfort</p>
			</div>

			<div className="absolute  bottom-6 w-full px-4">
				<Link href={'/home'}>
				<button className="w-full rounded-md capitalize p-2 centered bg-black text-white">
					go to store
				</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
