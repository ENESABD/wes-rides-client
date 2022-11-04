import { useEffect, useState } from 'react';
import useAxios from './useAxios';
import useForm from './useForm';

function useFormWithRequest(requestMethod, requestUrl, formatValues, jwt) {
    const [requestBody, setRequestBody] = useState(); //useMemo?
    const [response, requestError, requestInProcess] = useAxios(requestMethod, requestUrl, requestBody, jwt);
    const [error, setError] = useState();
    
    const submitForm = (event) => {
        const formattedValuesOrError = formatValues({ values, event });
        if (typeof(formattedValuesOrError) !== "string") {
            setRequestBody(formattedValuesOrError);
        } else {
            setError(formattedValuesOrError);
        }
    }

    useEffect(() => {
        setError(requestError);
    }, [requestError])
    
    const [values, handleChange, handleSubmit] = useForm(submitForm);

    return [values, handleChange, handleSubmit, 
        response, error, requestInProcess]
}

export default useFormWithRequest;