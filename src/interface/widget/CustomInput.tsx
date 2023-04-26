import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import naira from '@images/addNew/naira.svg';
import Link from 'next/link';

interface FieldPeops {
	label: string;
	placeholder?: string;
	customClass?: string;
	type: string; //path
	onClick?: () => void;
	change?: any;
	name: string;
	icon?: any;
}

const CustomField = ({ label, customClass, name, change, placeholder, type, icon, ...rest }: FieldPeops) => {
	if (type === 'price') {
		return (
			<div className="custom-input price">
				<label htmlFor={name}>{label}</label>

				<div className="custom-input-filed-container price">
					<div className="icon-box">
						<Image src={naira} alt="" width={11.3} height={20} />
					</div>

					<div className="line border-r border-lightGray h-[60%]"></div>

					<input
						id={name}
						placeholder={placeholder}
						type={'text'}
						onChange={(e) => change(e, name)}
						{...rest}
						className={`input price text-sm ${customClass}`}
					/>
				</div>
			</div>
		);
	}

	if (type === 'textarea') {
		return (
			<div className="custom-input">
				<label htmlFor={type}>{label}</label>

				<div className="custom-input-filed-container textarea">
					<textarea
						id={type}
						placeholder={placeholder}
						{...rest}
						onChange={(e) => change(e, name)}
						className={`input textarea  ${customClass}`}
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="custom-input">
			<label htmlFor={type}>{label}</label>

			<div className="custom-input-filed-container">
				{/* <div className="icon-box">
					<Image src={icon} alt='' />
				</div> */}

				<input
					id={type}
					placeholder={placeholder}
					type={type}
					onChange={(e) => change(e, name)}
					{...rest}
					className={`input  ${customClass}`}
				/>
			</div>
		</div>
	);
};

export default CustomField;
