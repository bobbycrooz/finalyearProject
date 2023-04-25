import Image from 'next/image';
import chargerIcon from '@category-assets/charger.svg';
import headsetIcon from '@category-assets/headsetIcon.svg';
import cablesIcon from '@category-assets/cablesIcon.svg';
import Text from '@widget/Text';
import Link from 'next/link';

interface PropsTypes {
	text: string;
}

const categoryList = [
	{
		name: 'Headset',
		icon: headsetIcon,
		link: ''
	},

	{
		name: 'Chargers',
		icon: chargerIcon,
		link: ''
	},

	{
		name: 'cables',
		icon: cablesIcon,
		link: ''
	},

	{
		name: 'phones',
		icon: chargerIcon,
		link: ''
	}
];

const Categories = ({}) => {
	// checks

	return (
		<div className="w-full mt-3 ">
			<Text type="title" customClass="" text="Categorise" />

			<div className=" category-list w-full grid grid-cols-4 gap-2 mt-3 p-1">
				{categoryList.map((item, index) => (
					<Link href={`/categories?name=${item.name}`} key={index}>
						<div className="category-item flex flex-col items-center rounded-md shadow p-2 bg-body">
							<div className="icon mx-auto centered ">
								<Image alt="" className="" src={item.icon} height={20} width={20} />
							</div>

							<Text customClass="mt-2 px-1 text-center text-xs" text={item.name} />
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
