import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null); // Changed from [] to null
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("Unable to fetch data");
                }
                const result = await res.json();
                 ("API Response:", result); // Debugging
                setData(result.data); // Set result directly
            } catch (error) {
                setError(error.message);
            } finally {
                setLoader(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, error, loader };
};

export default useFetch;
