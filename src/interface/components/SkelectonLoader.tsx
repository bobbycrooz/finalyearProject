import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkelectonLoader = () => {
	return (
		<div className="section-card  w-full  p-4">
			{/* <Image src={LogoBag} alt="" height={70} width={95} /> */}

			<SkeletonTheme baseColor="#fafafa" highlightColor="#f2f2f2">
				<Skeleton height={140} width={'100%'} containerClassName={''} />
				{/* <Skeleton height={140} width={'100%'} /> */}
			</SkeletonTheme>
		</div>
	);
};

export default SkelectonLoader;
