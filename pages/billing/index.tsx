import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import one from '@images/random/one.png';
import two from '@images/random/two.jpg';

const Auth: NextPage = () => {
	const [isSigningUp, setIsSigningUp] = React.useState(true);
	const [showModal, setShowModal] = React.useState(false);

	return (
		<div className=" bg-slate-300 w-screen  md:p-6">
         
				<Image alt={'an image'} src={one} placeholder='blur' priority quality={100}  layout="responsive"    height={300} width={300}/>

         
		
		</div>
	);
};

interface AppProps {
	name: string;
}

export default Auth;
