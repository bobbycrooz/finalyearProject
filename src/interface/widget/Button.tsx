// import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import Styled from 'styled-components';
// import useRedux from '@hooks/useRedux';
// import SEO from 'src/interface/components/SEO';
// import LogoAnimate from '@images/logo-animate.gif';
// import Logo from '@images/logo1.png';
import Link from 'next/link';
// import Text from '@widget/Text';

const Button = ({ text, customClass, full, link, ghost, disabled, size, isLoading, ...rest }: ButtonProps) => {
	if (link)
		return (
			<Link href={link}>
				<button
					className={`btn ${ghost && 'btn-ghost'} ${
						full && 'btn-full rounded-lg'
					}   centered capitalize  ${disabled && 'disabled'} ${
						isLoading && 'disabled'
					}  ${customClass} ${isLoading && 'loading'}`}
				>
					{isLoading && (
						<div className="loader-body ">
							<div className="loader-body-roller "></div>
						</div>
					)}
					<p>{text}</p>
				</button>
			</Link>
		);

	return (
		<button
			{...rest}
			disabled={disabled}
			className={` btn ${ghost && 'btn-ghost'} ${
				full ? 'btn-full ' : 'p-2 px-6'
			} centered capitalize rounded-lg  ${disabled && 'disabled'} ${
				isLoading && 'disabled'
			} ${customClass}`}
		>
			{isLoading && (
				<div className="loader-body ">
					<div className="loader-body-roller "></div>
				</div>
			)}
			<p>{text}</p>
		</button>
	);
};

interface ButtonProps {
	text: string;
	customClass?: string;
	link?: string; //path
	ghost?: boolean;
	onClick?: () => void;
	isLoading?: boolean;
	size?: number;
	full?: boolean;
	disabled?: boolean;
}

export default Button;
