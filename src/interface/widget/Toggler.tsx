import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import LogoAnimate from '@images/logo-animate.gif';
import Link from 'next/link';
import { ChangeEventHandler } from 'react';

interface TogglerProps {
	state: boolean;
	toggle: () => void;
}

const Toggler = ({ state, toggle }: TogglerProps) => {
	// get element focus state

	return (
		<div className={`toggler ${!state && 'off'}`} onClick={() => toggle()}>
			<div className="indicator">
				<span className="indicator-point"></span>
			</div>
		</div>
	);
};


export default Toggler;
