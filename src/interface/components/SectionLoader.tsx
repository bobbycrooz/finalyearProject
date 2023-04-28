import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import LogoBag from '@images/logo-bag.svg';
import { useEffect, useState } from 'react';

interface PropsTypes {
	visibility: boolean;
	// customClass?: string;
	// link?: string; //path
	// onClick?: () => void;
}

const SectionLoader = ({ message }: { message?: string }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	return (
		<div className="softloader section-card w-full  ">
			<div className="h-[100px] centered">
				<div>
					{isLoading ? (
						<div className="loader-body">
							<div className="loader-body-roller two"></div>
						</div>
					) : (
						<p className="text-gray-500 text-sm italic">{message || " 'Emppty'"}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default SectionLoader;
