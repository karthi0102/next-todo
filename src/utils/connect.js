import mongoose from 'mongoose';

export const connectDb = async(req,res)=>{
 
    await mongoose.connect("mongodb://host:docker.internal:27017/todo")
    .then(()=>console.log("Connection Open"))
    .catch((err)=>console.log("Error"));
    
}



// localhost:27017/next-todo

// admin:password@localhost:27018/todo