import React from 'react';

const useForm = (initialValues, callBack) => {
	const [ inputs, setInputs ] = React.useState(initialValues);
	const handleChange = (e) => {
		e.persist();
		setInputs((input) => ({ ...inputs, [e.target.name]: e.target.value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		callBack();
	};
	const reset = () => setInputs(initialValues);
	return [ inputs, handleChange, handleSubmit, reset ];
};

export default useForm;
