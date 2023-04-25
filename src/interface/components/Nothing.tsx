import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Nothing = ({ message, icon }: { message?: string; icon?: any }) => {
	return (
		<div className="section-card  w-full  p-8 py-16 centered border border-yellow">
			{/* <Image src={LogoBag} alt="" height={70} width={95} /> */}
			<div className="stack text-center">
				{icon && <div className="icon w-full centered">{icon}</div>}
				<h1 className="warning text-lg font-std-medium text-gray-600">{message ? message : 'No item in Cart yet'} </h1>
				<p className="text-sm text-gray-500">Click Products bellow to add and item</p>
			</div>
		</div>
	);
};

export default Nothing;
