import React, { useState } from 'react'

const Revision = () => {
    const [todo, settodo] = useState('')
    const [gettodo, setgettodo] = useState([]);
    const [Letedit, setLetedit] = useState(null);
    const Add=()=>{
        if (todo.trim()==='') return;
        else if(Letedit!==null){
const updatedlist=gettodo;
updatedlist[Letedit]=todo;
setgettodo(updatedlist)
        }
        else{

            setgettodo([...gettodo,todo])
        }
        settodo('')
    }
    const deleted=(index)=>{
       {
        const afterdelete=gettodo.filter((cval,i)=>(
index !==i
        ))
       setgettodo(afterdelete) 
       } 
    }
    const edited=(index)=>{
        settodo(gettodo[index])
setLetedit(index)
    }
    localStorage.setItem(gettodo)
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center mt-2">
        <input className='p-2 ' value={todo} onChange={(e)=>{settodo(e.target.value)}} type="text"  placeholder='Add Todo' />
        <button onClick={Add} className='btn btn-primary mx-2'>Add</button>
    </div>
    <ul>
        {gettodo.map((item, index) => (
            <li key={index}>{item}
            <button onClick={()=>{edited(index)}}>Edit</button>
            <button onClick={()=>{deleted(index)}}>Delete</button>
            </li>
        ))}
        <button onClick={()=>{setgettodo([])}} >Delete All</button>
    </ul>
    
    </>
  )
}

export default Revision