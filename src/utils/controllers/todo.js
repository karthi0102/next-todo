import Todo from "@/models/todo"
export const getAllTodos = async(req,res)=>{
    try{
    const todos = await Todo.find({});
    res.status(201).json(todos);
    }catch(err){
        res.status(500).json(err)
    }

}

export const addTodo = async(req,res)=>{
    try {
        const{title}=req.body;
        console.log(req.body);
        const todo = new Todo({title});
        await todo.save();
        res.status(200).json("Todo Created");
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}