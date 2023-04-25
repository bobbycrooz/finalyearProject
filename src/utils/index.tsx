// import { useRouter } from 'next/router';
import React, { ReactElement, useState } from 'react';
import Cookies from 'js-cookie';

function saveToken(token: string) {
	let tokenAlreadyExist = Cookies.get('token');
	if (!tokenAlreadyExist) {
		Cookies.set('token', token);
		return true;
	} else {
		return false;
	}
}

function getToken() {
	let token = Cookies.get('token');
	if (token) {
		return token;
	} else {
		return false;
	}
}

function hasToken() {
	let token = Cookies.get('token');
	if (token) {
		return true;
	} else {
		return false;
	}
}

function isTempUser(){
	// its temp when token is guest 
	let token = getToken()
	if (!token) false 

	if(String(token).slice(0,6) !== "guest"){
		return false
	}

	return true
}


export function validateField(fieldType: string, fieldValue: string) {
    // if (fieldType === 'password' && fieldValue !== 'a24627DD4') {
    //     return {
    //         valid: false,
    //         errMsg: 'The password is wrong'
    //     };
    // }

    // if (fieldType === 'username' && fieldValue !== 'bobby') {
    //     return {
    //         valid: false,
    //         errMsg: "The username must be 'bobby'"
    //     };
    // }

    return {
        valid: true,
        errMsg: null
    };
}



const utils = {
	formatDate: (date: string) => {
		const fullYear = date.split('T')[0];
		const getMin = date.split('T')[1].split(':')[0];
		const getSec = date.split('T')[1].split(':')[1];
		return `${fullYear} ${getMin}:${getSec}`;
	},

	logout: () => {
		// React.useEffect(() => {
		//   logOut();
		// });
		return <></>;
	},

	isTempUser,

	saveToken,

	getToken,

	hasToken,

	removeToken: () => {
		let token = Cookies.get('token');
		if (token) {
			Cookies.remove('token');
			return true;
		}
		return false;
	},

	resp: (size: number, width = 1440) => `${(size / width) * 100}vw`
};

export default utils;


