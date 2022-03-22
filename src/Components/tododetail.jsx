import { useDispatch,useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { getTodo } from "../Redux/action";
import { useState } from "react";
export const TodoDetail=()=>{
    const dispatch=useDispatch();
    const todo=useSelector((store)=>store.todo);
    const [display,setDisplay]=useState(false);
    const {id}= useParams();
    // console.log(id);
    let item= todo.filter((e)=>{
        if(e.id==id){
            return true;
        }
    })

    const handleToggle=()=>{
        axios.patch(`http://localhost:8000/todos/${id}`,{
            status: item[0].status ? false : true,
            
        }).then((res)=>{
          getData()
        })
    }

    const getData=()=>{
        axios.get("http://localhost:8000/todos").then((res)=>{
        dispatch(getTodo(res.data));
        
        })
    }

    const handleDelete=()=>{
        axios.delete(`http://localhost:8000/todos/${id}`).then((res)=>{
          getData();
          setDisplay(true);
          
        })
    }

    return(
        <>
      {display ? <Navigate to={"/"}/> :
      <>
        <div>
        <span>TODO</span>
        {" "}
        <span>Status</span>
        {" "}
        <span>Toggle</span>
        {" "}
        <span>Delete</span>
    </div>
    <div>
        <span>{item[0].todo}</span>
        {" "}
        <span>{item[0].status? "true" : "false"}</span>
        {" "}
        <button onClick={handleToggle}>Toggle</button>
        {" "}
        <button onClick={handleDelete}>Delete</button>
    </div>
    </>
      }
      

    
        
        </>
    )
}