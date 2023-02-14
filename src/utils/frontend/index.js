import * as api from "../api";

export const getAllTodos =async ()=>{
    try{
    const {data}=await api.getAllTodos();
    return data
    }catch(err){
        console.log(err)
    }
}