
import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import LogoBag from '@images/logo-bag.svg';

interface PropsTypes {
	visibility: boolean;
	// customClass?: string;
	// link?: string; //path
	// onClick?: () => void;
}

const Modal = ({ visibility }: PropsTypes) => {
if(visibility){
	return (
		<div className={`${visibility && 'active'} modal loader-screen  strictFadeIn layer`}>
			<AnimatePresence>
				<motion.div exit={{ opacity: 0 }} className="loader-image ">
					<div className="spinner">
						
					</div>
					<div className="spinner-logo centered ">
							{/* <Image src={LogoBag} alt="" height={70} width={95} /> */}
						</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}else{
	return(
		<></>
	)
}

	
};

export default Modal;
