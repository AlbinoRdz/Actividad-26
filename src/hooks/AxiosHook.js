import { useEffect, useState } from "react"
import axios from "axios";


const AxiosHook = (url) =>{
    const [getAxios, setGetAaxios] = useState([]);
    
    
    useEffect(()=>{
        const getProducts = async () =>{
            try {
                const res = await axios.get(url);
                
                setGetAaxios(res.data); 
                
            } catch (err){
                console.error(err);
                
            }  
        }
    getProducts();
    },[url]);

    return {getAxios}
}

export default AxiosHook;