import { useEffect, useState } from "react";

const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[err, setErr] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();
        
        setTimeout(()=>{
            fetch(url, { signal: abortCont.signal })
            .then(res=>{
                if(!res.ok){
                    throw Error("There's an error with the fetch");
                }

                return res.json();
            })
            .then(data=>{
                setData(data);
                setLoading(false);
                setErr(null);
            })
            .catch((e)=>{
                if(e.name==="AbortError"){
                    console.log("The fetch was aborted!");
                }else{
                    setLoading(false);
                    setErr(e.message);
                }
            })

        })
            return () => abortCont.abort
    },[url])
    
    return { data, setData, loading, err };
}
 
export default useFetch;