import { useState } from "react";

function useForm(submitCallback) {
    const [values, setValues] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        submitCallback(e);
    }

    const handleChange = (e) => {
        setValues(prevValues => ({...prevValues, [e.target.name]: e.target.value}));
    }

    return [values, handleChange, handleSubmit];
}

export default useForm;