import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import LogoBag from '@images/logo-bag.svg';

interface PropsTypes {
	visibility: boolean;
	// customClass?: string;
	// link?: string; //path
	// onClick?: () => void;
}

const SectionLoader = () => {
	return (
		<div className="softloader section-card w-full  ">
			<div className="h-[100px] centered">
				<div>
					<div className="loader-body">
						<div className="loader-body-roller two"></div>
					</div>
					{/* <p className="text-gray-500 text-sm italic">loading...</p> */}
				</div>
			</div>
		</div>
	);
};

export default SectionLoader;
