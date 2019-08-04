import {useState} from 'react';

const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  const reset =()=>{
      setInputs(initialValues)
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    reset
  };
}
export default useSignUpForm;