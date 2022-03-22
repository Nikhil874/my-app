import { useEffect, useState } from "react"
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { getTodo } from "../Redux/action";
import { Link } from "react-router-dom";
export const Todo=()=>{
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    const todo=useSelector((store)=>store.todo)
const handleSubmit=()=>{
    axios.post("http://localhost:8000/todos",{
        todo:text,
        status:false
    }).then((res)=>{
        getData();
    setText("");
    });
 
}
useEffect(()=>{
getData();
//console.log(todo);
},[])

const getData=()=>{
    axios.get("http://localhost:8000/todos").then((res)=>{
    dispatch(getTodo(res.data));
    
    })
}

    return (
        <>
        <input type="text" placeholder="Title" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleSubmit}>Add Todo</button>
        <hr />
       
           {todo.map((e)=>{
               //console.log(e);
               return <div key={e.id}><Link to={`/todo/${e.id}`}>{e.todo}</Link></div>
           })}
        
        </>
    )
}