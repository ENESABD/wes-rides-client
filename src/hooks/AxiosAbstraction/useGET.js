import { useMemo } from 'react';
import useAxios from './useAxios';

function useGET(url, jwt) {
    let current_jwt = jwt ? jwt : localStorage?.jw_token;
    
    let params = useMemo(() => {
        if (!url) {
            return null;
        }
                
        return {
            method: 'GET',
            url: url,
            headers: { jw_token: current_jwt }    
        }
    }, [url, current_jwt]);
      
    const [response, error, isLoading] = useAxios(params);
    return [response, error, isLoading];
}

export default useGET;