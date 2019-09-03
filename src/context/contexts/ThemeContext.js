import React, { createContext } from 'react';

const useToggle = (initial = false) => {
	const [ state, setState ] = React.useState(initial);
	const toggle = () => setState(!state);
	return [ state, toggle ];
};
const ThemeContext = createContext();

const ThemeProvider = (props) => {
	const [ isDarkMode, toggle ] = useToggle(false);
	return <ThemeContext.Provider value={{ isDarkMode, toggle }}>{props.children}</ThemeContext.Provider>;
};
export { ThemeContext, ThemeProvider };
