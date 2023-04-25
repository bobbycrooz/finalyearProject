function localSet({ name, value }: { name: string; value: {[key:string]:string} }) {
	const parsedValue = JSON.stringify(value);

	return localStorage.setItem(name, parsedValue);
}

function localGet(name: string) {
	const stringifiedValue = localStorage.getItem(name);
	  
	// @ts-ignore 
	return JSON.parse(stringifiedValue)
}

function localRmv(name: string) {
	return localStorage.removeItem(name);
}

const ls = {
	localGet,
	localSet,
	localRmv
};

export default ls;
