import axios from "axios";


const useAxiosSecure=()=>{
    const axoisSecure= axios.create({
        baseURL: "https://newsdata.io/api/1"
    })

    return axoisSecure; 

}

export default useAxiosSecure; 