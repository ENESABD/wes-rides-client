import { useMemo, useState } from 'react';
import useAxios from './useAxios';

function usePUT(url, body, jwt) {
    const [bodyState, setBodyState] = useState(body);
    let current_jwt = jwt ? jwt : localStorage?.jw_token;

    const makePutRequest = (body) => {
        setBodyState(body);
    }

    let params = useMemo(() => {
        if (!url || !bodyState) {
            return null;
        }
        
        return {
            method: 'PUT',
            url: url,
            data: bodyState,
            headers: { jw_token: current_jwt }
        }
    }, [url, bodyState, current_jwt]);

    const [response, error, isLoading] = useAxios(params);

    return [response, error, isLoading, makePutRequest];
}

export default usePUT;