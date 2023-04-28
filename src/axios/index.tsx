import axios, { AxiosRequestConfig } from 'axios';
import Router from 'next/router';
import utils from '@utils';

function fmtResponse(responseData: any, error: boolean) {
	let { statusText, status, data } = responseData;

	if (error) {
		return {
			status,
			serverResponse: data,
			statusText,
			error: true
		};
	} else {
		return {
			status,
			serverResponse: data,
			statusText,
			error: false
		};
	}
}

console.log(process.env.NEXT_PUBLIC_BASE_LINK, process.env.NEXT_PUBLIC_NODE_ENV);

const service = axios.create({
	baseURL: process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? `http://localhost:3007` : process.env.NEXT_PUBLIC_BASE_LINK,
	headers: {
		'X-API-KEY': '95e03ddd3572374c5a61d596e0eafffa',
		'iden-unique_key': 'quadraple-and-hello-edfojoidfj'
		// Authorization: `bearer `
	}
});

// request interceptor
service.interceptors.request.use(
	async (config: AxiosRequestConfig) => {
		if (config.headers === undefined) {
			config.headers = {};
		}

		if (utils.hasToken() && utils.getToken() !== false) {
			// config.headers.Authorization = `Bearer ${token}`;
			config.headers.Authorization = `Bearer ${String(utils.getToken())}`;
		}

		return config;
	},

	(error) => {
		console.log('this error came from axio request error', error);

		return Promise.reject(error);
	}
);

// Add a response interceptor
service.interceptors.response.use(
	function (response) {
		const { data } = response;

		return fmtResponse(response, false);
	},

	function (error) {
		const { response } = error;
		// console.log(response, 'this error is comming from response interceptor');

		// check if error is an axios error
		// if (error?.name && error.name === 'AxiosError') {
		if (error && !error.response.data) {
			return {
				error: true,
				serverResponse: error.message
			};
		} else {
			const {
				response: { data }
			} = error;

			return {
				error: true,
				serverResponse: data
			};
		}

		// return fmtResponse(response, true);
	}
);

export default service;
