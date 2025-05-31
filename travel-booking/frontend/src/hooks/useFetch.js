import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState ([]);// stating variables to store fetched data, store any error if data is getting fetched
    const [error, setError] = useState (null);
    const [loading, setLoading] = useState (false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // set to true to start fetching the data
            
            try{ // for API
                const res = await fetch(url);

                if (!res.ok){
                    setError("Failed to fetch");
                }
                const result = await res.json();

                setData(result.data);
                setLoading(false);
            }catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {
        data,
        error,
        loading,
    };
};

export default useFetch;