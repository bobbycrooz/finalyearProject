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

	// TODO: to be changes to landing page

	return (
		<div className=" h-screen w-screen relative  bg-neutral-100">
			<SEO title="home" />

			{/* <div className="home px-4 ">
				<h1 className="head text-black text-2xl capitalize font-std-bold">
					campus store ecommerce platform
				</h1>
				<p className="font-std-sm">get what you need at your own comfort</p>
			</div> */}

			<div className="absolute  bottom-11 w-full px-4">
				
				<Button
					full
					link='/home'
					text={'go to store'}
					customClass=""
				
				/>
			</div>
		</div>
	);
};

export default Home;
