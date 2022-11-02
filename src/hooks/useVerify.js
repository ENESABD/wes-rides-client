import { useEffect, useState } from 'react';
import useAxios from './AxiosAbstraction/useAxios';


function useVerify(jwt) {

  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  const [hasValidToken, error, isVerifying] = useAxios('GET', jwt ? '/authentication/verify-r' : '/authentication/verify', null, jwt);

  useEffect(() => {
    if (hasValidToken) {
      setIsAuthenticated(true);
    }

    if (error) {
      setIsAuthenticated(false);
    }
  }, [hasValidToken, isVerifying, error])

  return [isAuthenticated, setIsAuthenticated, isVerifying];
}

export default useVerify;