import { useMemo, useState } from 'react';
import useAxios from './useAxios';

function usePOST(url, body) {
    const [bodyState, setBodyState] = useState(body);
    let current_jwt = localStorage?.jw_token;

    const makePostRequest = (values) => {
        console.log('Request received');
        setBodyState(values);
    }

    let params = useMemo(() => {
        if (!url || !bodyState) {
            return null;
        }
        
        return {
            method: 'POST',
            url: url,
            data: bodyState,
            headers: { jw_token: current_jwt }
        }
    }, [url, bodyState, current_jwt]);

    console.log(params);
    const [response, error, isLoading] = useAxios(params);

    return [response, error, isLoading, makePostRequest];
}

export default usePOST;