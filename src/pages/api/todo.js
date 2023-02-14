import { getAllTodos,addTodo } from "@/utils/controllers/todo";
import {connectDb} from "@/utils/connect";

export default async function handler(req,res){
   
    await connectDb();
    if(req.method=="GET")
        getAllTodos(req,res);
    else if(req.method=="POST")
        addTodo(req,res);
    
}