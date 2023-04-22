import axios from "axios"
import { GETUSERDATA, PREVIOUSDATA } from "./actionConstants"

export const getPost = ()=>{

    return((dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            console.log(response)
            dispatch({type:GETUSERDATA, payload:response.data})
    })
        .catch((error)=> console.log(error))
    })
}

export const getOldData = ()=>{
    return{
        type:PREVIOUSDATA
    }
}