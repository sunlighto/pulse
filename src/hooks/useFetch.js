import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) =>{
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true)
                const res = await makeRequest.get(url,
                {
                    headers:{
                        Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
                    },
                });
                setCar(res.data.data)
            } catch(err){
                setError(err.message || 'Something went wrong')
            }
            setLoading(false)
        } 
        fetchData();
    }, [url]);
    return {car, loading, error}
} 
export default useFetch;