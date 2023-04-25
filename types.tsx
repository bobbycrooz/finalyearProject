export interface LoginUserType {
	email: string;
	password: string;
}

export interface UserTypes {
	username?: string;
	name?: string;
	email?: string;
	password?: any;
}

export interface OrderTypes {
	shippingMode: string;
	paymentMethod: string;
	couponCode?: string;
}

export interface NotifyTypes {
	type: 'success' | 'error';
	message: string;
}

// export default LoginUserType
export interface ProductTypes {
	_id: string;
	name: string;
	description: string;
	category: string;
	imageUrl?: string[];
	uuid: string;
	price: number;
	initialPrice: number;
	lastlPrice?: number;
	count: number;
	isFlash: boolean;
	newItem: boolean;
	isAvailable: boolean;
	__v?: number;
}

export interface MapTypes {
	item: any;
	key: number;
}
