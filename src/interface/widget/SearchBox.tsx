import Image from 'next/image';
// import Styled from 'styled-components';
// import useRedux from '@hooks/useRedux';
// import LogoBag from '@images/logo-bag.svg';
// import Hamburger from '@images/hamburger.svg';
import SearchIcon from '@images/search-icon.svg';
import { useState } from 'react';
import { searchProductByText } from '@axios/admin';

interface PropsTypes {
	context?: string;
	// customClass?: string;
	// link?: string; //path
	searchSetter: React.Dispatch<React.SetStateAction<never[]>>;
}

const SearchBox = ({ context, searchSetter }: PropsTypes) => {
	const [searchIndex, setSearchIndex] = useState('');

	async function searchHandler(e: { preventDefault: () => void; target: { value: any } }) {
		// take user input and send it to the backend as the wuery params
		e.preventDefault();

		const searchValue = e.target.value;
		if (searchValue) {
			// @ts-ignore
			const { serverResponse, error } = await searchProductByText(searchValue);

			if (!error && serverResponse) {
				return searchSetter(serverResponse.data);
			}

			// console.error('there was error');
		}
	}

	return (
		<div className="flex search-box ">
			<div className="icon-box centered ml-1 ">
				<Image src={SearchIcon} alt={'icon'} height={15} width={15} />
			</div>

			<input
				placeholder="Search for products, brands and category"
				type="text"
				onChange={(e) => searchHandler(e)}
				className="field font-std-book text-sm bg-red-500 capitalize p-2 "
			/>
		</div>
	);
};

export default SearchBox;
