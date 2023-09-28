import { useState, useEffect } from "react";
// This useFetch is a custom Hook made to fetch data from a endpoint
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { // useEffect runs on every render so we put the code we want to run on every render
        const abortCont = new AbortController(); // clearn up function or abort controller if we switch before fetch

        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("couldn't fetch the data required");
                }
                return res.json();
            })
                .then(data =>{
                    // console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.message === 'AbortError'){
                        console.log('fetch aborted');
                    }else{
                        setIsLoading(false);
                        setError(err.message);
                    }
                });
        },1000);

        return () => abortCont.abort();
    
    }, [url]);

    return {data, isLoading, error};
}

export default useFetch;