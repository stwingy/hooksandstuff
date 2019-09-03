import React from 'react';
export const useToggle = (initial = false) => {
	const [ state, setState ] = React.useState(initial);
	const toggle = () => setState(!state);
	return [ state, toggle ];
};
export default useToggle;
