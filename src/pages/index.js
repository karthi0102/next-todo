import React,{useState} from 'react'
import { getAllTodos } from '@/utils/frontend'
import axios from 'axios'
import { useRouter } from 'next/router'
const Home = ({todos}) => {
  const router=useRouter();
  const [title,setTitle]=useState('')
  const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
      setTitle("")
      const res = await axios.post('http://localhost:3000/api/todo',{title})
      getAllTodos();
      router.replace('/')
      
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
        <h1>List of Todos</h1>
        {todos.map((t,i) =>(
          <div key={i}>
              <h2>{t.title}</h2>
          </div>
        ))}
        <div>
          <h2>Add Todo</h2>
          <input type='text' placeholder='text' onChange={e=>setTitle(e.target.value)} value={title} />
          <button onClick={handleSubmit}> Add + </button>
        </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context){
  let todos = await getAllTodos();
  if(todos.length==0) todos=[]
  return {
    props:{
      todos:todos
    },
   
  } 
}
