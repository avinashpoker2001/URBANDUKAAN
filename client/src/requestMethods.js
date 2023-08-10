import axios from "axios";

const BASE_URL ="http://localhost:5001/api/"
let object

// JSON.parse(localStorage.getItem("persist:root")).currentUser ? object = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser).accessToken : object = "" 

// console.log(JSON.parse(localStorage.getItem("persist:root")).currentUser)

// if(localStorage.getItem("persist:root") && (JSON.parse(localStorage.getItem("persist:root")).user).currentUser !== null)
// {object = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser).accessToken} 
// else{object = ""}
// object =""

const TOKEN = ""
// (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser).accessToken

export const publicRequest = axios.create({
    baseURL:BASE_URL,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}` }
})