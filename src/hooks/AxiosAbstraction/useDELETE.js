import useAxios from './useAxios';

function useDELETE(url, id) {
    let current_jwt = localStorage?.jwt;
    let params = useMemo(() => {return {
        method: 'DELETE',
        url: `${url}/${id}`,
        headers: { jw_token: current_jwt }
    }}, [url, id, current_jwt]);
    const [error, isLoading] = useAxios(params);

    return [error, isLoading];
}

export default useDELETE;