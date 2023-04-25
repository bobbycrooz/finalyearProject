import { useRouter } from 'next/router';
import React from 'react';
import utils from '@utils';
import { useAuth } from '@contexts/authContext';

const Guard = () => {
	const { push } = useRouter();
	const { hasToken } = utils;
	const { user, setUser } = useAuth();

	// VEERIFY USER ON FIRST LUNCH
	function verifyUser() {
		let tempUser = utils.isTempUser();

		if (tempUser) {
			return console.log('this user is a guest');
		}

		// if (!hasToken()) {
		// 	push('/auth');
		// }
	}

	React.useEffect(() => {
		// push('/home')
		verifyUser();
	}, []);

	return <></>;
};

export default Guard;
