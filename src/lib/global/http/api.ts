import axios from "axios";


const api = axios.create({
    headers :{
        "Content-Length":"application/json",
        "Accept":"application/json"
    }
})

export default api