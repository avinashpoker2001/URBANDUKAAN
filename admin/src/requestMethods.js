import axios from "axios";

const BASE_URL ="http://localhost:5001/api/"
let object

console.log(localStorage.getItem("persist:root"))
if(JSON.parse(localStorage.getItem("persist:root"))!==undefined)
{JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser!==null ? object = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser).accessToken: object = "" }
else{
    object = null;
}

// if(localStorage.getItem("persist:root")!== null ){object = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser).accessToken} 
// else{object = ""}

const TOKEN = object

export const publicRequest = axios.create({
    baseURL:BASE_URL,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }
})
console.log(TOKEN)
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token: `Bearer ${TOKEN}` }
})