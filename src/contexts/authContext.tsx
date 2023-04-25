import { USER, USER_TEMP } from '@constants';
import { UserTypes } from '@types';
import React, { useContext, useState, useEffect, useMemo, createContext, Children } from 'react';

const AuthContext = createContext<any>({});

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }: any) => {
	const [loggedInUser, setLogedInUser] = useState<UserTypes>({});
	// console.log('the user object from auth context', user);

	// -----------------useEffect

	React.useEffect(() => {
		// @ts-ignore
		let user = JSON.parse(localStorage.getItem(USER_TEMP)) || JSON.parse(localStorage.getItem(USER));

		setLogedInUser(user);
		console.log('user has been initialized');
	}, [setLogedInUser]);

	useEffect(() => {
		// console.log('this is the Global user object', user);
	});

	// -----------------useEffect

	return <AuthContext.Provider value={{ loggedInUser, setLogedInUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
