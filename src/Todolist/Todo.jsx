import React, { useState } from 'react'

const Todo = () => {
    const [todo, settodo] = useState('');
    const [gettodo, setgettodo] = useState([]);
    const AddTodo=(e)=>{
        e.preventDefault(); 
        setgettodo([...gettodo,todo ])
        settodo('') 
    }
    const deleteAll=()=>{
        setgettodo([])

    }
    const deleted=(index)=>{
    const deletedarr= gettodo.filter((cval,i)=>(
        i!==index
     )) 
     setgettodo(deletedarr)

    }
    const edit=()=>{

    }
  return (
    <>
    <div className="container-fluid bg-success text-white py-3" >
   <h1 className='text-center'>
    TODO List
   </h1>
    </div>
    <div className="container bg-danger d-flex justify-content-center align-items-center text-white">
<form action="" className='py-5' onSubmit={AddTodo}>
    <label htmlFor="">Todo</label>
    <input value={todo} onChange={(e)=>{settodo(e.target.value)}} className='mx-3' type="text" name="Todo" id="Todo"  placeholder='Enter Todo'/>
    <button type='submit'  className='btn btn-success'>Add</button>
</form>
    </div>
    <ul>
{
    
    gettodo.map((item, index) => (
        <>
        <li  className=' d-flex justify-content-center align-items-center my-4' key={index}>{item}
        <button  className='btn btn-primary mx-1' onClick={()=>{edit(index)}} >Edit</button>
        <button className='btn btn-danger' onClick={()=>{deleted(index)}}>Delete</button>
        </li>
        </>
    ))

 
}
{gettodo.length >= 1 ? <button onClick={deleteAll} className='btn btn-danger d-flex justify-content-center align-items-center my-4'>Delete All</button> : null}
</ul>






    </>
  )
}

export default Todo


// import React, { useState } from 'react'
// const Todo = () => {
//     const [todo, settodo] = useState('');
//     const [gettodo, setgettodo] = useState([]);
//     const AddTodo=(e)=>{
//         e.preventDefault(); 
//         if(todo.trim()=='') return;
//         setgettodo([...gettodo,todo ])
//         settodo('') 
//     }
//     const deleteAll=()=>{
//         setgettodo([])

//     }
//     const deleted=(index)=>{
//     const deletedarr= gettodo.filter((cval,i)=>(
//         i!==index
//      )) 
//      setgettodo(deletedarr)

//     }
//     const edit=(index)=>{
//         settodo(gettodo[index]);
        

//     }
//   return (
//     <>
//     <div className="container-fluid bg-success text-white py-3" >
//    <h1 className='text-center'>
//     TODO List
//    </h1>
//     </div>
//     <div className="container bg-danger d-flex justify-content-center align-items-center text-white">
// <form action="" className='py-5' onSubmit={AddTodo}>
//     <label htmlFor="">Todo</label>
//     <input value={todo} onChange={(e)=>{settodo(e.target.value)}} className='mx-3' type="text" name="Todo" id="Todo"  placeholder='Enter Todo'/>
//     <button type='submit'  className='btn btn-success'>Add</button>
// </form>
//     </div>
//     <ul>
// {
    
//     gettodo.map((item, index) => (
//         <>
//         <li  className=' d-flex justify-content-center align-items-center my-4' key={index}>{item}
//         <button  className='btn btn-primary mx-1' onClick={()=>{edit(index)}} >Edit</button>
//         <button className='btn btn-danger' onClick={()=>{deleted(index)}}>Delete</button>
//         </li>
//         </>
//     ))

 
// }
// {gettodo.length >= 1 ? <button onClick={deleteAll} className='btn btn-danger d-flex justify-content-center align-items-center my-4'>Delete All</button> : null}
// </ul>






//     </>
//   )
// }

// export default Todo


