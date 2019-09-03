import React from 'react';
const useLocalstorage = (key, defaultValue) => {
	const [ state, setState ] = React.useState(() => {
		let val;
		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
		} catch (error) {
			val = defaultValue;
		}
		return val;
	});
	React.useEffect(
		() => {
			window.localStorage.setItem(key, JSON.stringify(state));
		},
		[ state, key ]
	);
	return [ state, setState ];
};
export default useLocalstorage;
