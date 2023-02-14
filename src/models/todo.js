import mongoose from "mongoose";
const {Schema,model,models}=mongoose

const todoSchema = new Schema({
    title:String,
})

const Todo = models.Todo || model("Todo",todoSchema);

export default Todo;