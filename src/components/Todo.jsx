import React,{useState} from 'react'
import { adatok } from '../data.js'
import ListGroup from 'react-bootstrap/ListGroup';

export const Todo=()=> {
  const [newTodo,setNewTodo] =useState('')
  const [Todos,setTodos]=useState(adatok)

  const handleAdd=()=>{
    //console.log("Click",newTodo)
    setTodos([...Todos,newTodo])
  }

  const handleDelete=(val)=>{
    console.log("Törlés",val)
    const newArr=Todos.filter(item=>item!=val)
    setTodos(newArr)
  }

  const handleDone=(obj)=>{
    obj.nextElementSibling.classList.toggle("text-decoration-line-through")
  }

  console.log(Todos)
  return (
    <div className='todo'>
        <h1 className='text-center'>My todos</h1>
        <form className="d-flex justify-content-center m-1">
          <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
          <i className='fa-regular fa-square-plus fa-3x text-success m-1' onClick={handleAdd}></i>
          <i className='fa-solid fa-trash fa-3x text-danger' onClick={()=>setTodos([])}></i>
        </form>
        <ListGroup>
        {Todos.map(item =>
        <ListGroup.Item key={item} className="d-flex justify-content-between border">
          <i className="fa-solid fa-square-check fa-2x" onClick={(e)=>handleDone(e.target)}></i>
          <span className={item}>{item}</span>
          <i className="fa-solid fa-trash text-danger fa-2x" id={item} onClick={(e)=>handleDelete(e.target.id)}></i>
          </ListGroup.Item>)}
          </ListGroup>
    </div>
    )
  }