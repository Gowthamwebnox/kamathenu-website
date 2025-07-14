import axios from 'axios';


export default async function ApiService(apiData:{method:string,url:string,data:string}){
    const payload={
        method:apiData.method,
        url:apiData.url,
        data:apiData.data
    }
    console.log(payload)
    const response=await axios(payload);
    return response
}