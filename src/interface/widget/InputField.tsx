import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import LogoAnimate from '@images/logo-animate.gif';
import Link from 'next/link';
import { ChangeEventHandler } from 'react';

interface ButtonProps {
	label: string;
	placeholder?: string;
	customClass?: string;
	type: string; //path
	onClick?: () => void;
	icon: any;
	onChangeHandler?: (e: EventTypes, fieldName: string) => void;
}

const InputField = ({ onChangeHandler, label, customClass, placeholder, type, icon, ...rest }: ButtonProps) => {
	// get element focus state

	return (
		<div className="input-container">
			<label className='text-sm font-std-book text-gray-500' htmlFor={type}>{label}</label>

			<div className="w-full h-14 flex items-center border-b border-amber-600">
				<div className=" py-2 centered">
					{icon && (icon as any)}
				</div>

				<input
					id={type}
					placeholder={placeholder}
					type={type}
					name={label.toLowerCase()}
					// @ts-ignore
					onChange={(e: any, fieldName: any) => onChangeHandler(e, label.toLowerCase())}
					{...rest}
					className={`w-full h-full  px-4 p-2 centered auth_input ${customClass}`}
				/>
			</div>
		</div>
	);
};

interface EventTypes {
	preventDefault: () => void;
	target: { value: any };
}

export default InputField;
