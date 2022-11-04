import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

axios.defaults.baseURL = process.env.SERVER_HOST || 'http://192.168.0.3:8000';
axios.defaults.headers = {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  };

function useAxios(requestMethod, requestUrl, requestBody, jwt) {
    const [response, setResponse] = useState(null);
    const responseMemo = useMemo(() => response, [response])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    let current_jwt = jwt ? jwt : localStorage?.jw_token;

    let axiosParams = useMemo(() => {
        if (!requestUrl ||
            !requestMethod ||
            ((requestMethod === 'POST' || requestMethod === 'PUT') && !requestBody)
            ) {
            return null;
        }

        return {
            method: requestMethod,
            url: requestUrl,
            data: requestBody,
            headers: { jw_token: current_jwt }
        }
    }, [requestUrl, requestMethod, requestBody, current_jwt]);
    
    useEffect(() => {
        console.log('Mounted/Updated')
        let isMounted = true;
        const controller = new AbortController();
        
        const makeRequest = async (params) => {
            setIsLoading(true);
            try {
                console.log(params);
                const res = await axios.request({...params, signal: controller.signal});
                if (isMounted) {
                    console.log(res);
                    setResponse(res.data);
                    setError(null);
                }
            } catch(err) {
                if (isMounted) {
                    console.log(err);
                    setError(err.response.data.error);
                    setResponse(null);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        if (axiosParams) {
            makeRequest(axiosParams);
        }

        const cleanUp = () => {
            console.log('Unmounted/params changed')
            isMounted = false;
            controller.abort();
        }

        return cleanUp;
    }, [axiosParams]);

    return [ responseMemo, error, isLoading ];
};

export default useAxios;