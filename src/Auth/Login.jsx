import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [signIn, setsignIn] = useState({email:'',password:''})
const submithandle=(e)=>{
e.preventDefault();
axios.post('https://api.escuelajs.co/api/v1/auth/login',signIn).then(
(response)=>{
const token=response.data.access_token;
if(token){
    localStorage.setItem('token',token);
    console.log('Token that is saved in local storage ',response.data.access_token)

}
// setsignIn(signIn)
// const token=response.data.
// const token=JSON.stringify(localStorage.setItem('token',response.data.access_token))
// console.log(token)
}

).catch(
    (error)=>{
        console.log(error);
    }
)

}
  return (
    <>
      <div  
        className='container-fluid d-flex flex-column justify-content-center align-items-center  bg-black text-white'
        style={{ height: '100vh' }}
      >
        <div className='row'>
              <div className=' col-12'>
            <h1>Login Page</h1>
            <form  onSubmit={submithandle} >
              <label htmlFor='email'>Email</label>
              <input
                className='form-control my-2'
                value={signIn.email}
                onChange={(e)=>{setsignIn({...signIn,[e.target.name]:e.target.value})}}
                type='email'
                name='email'
                id='email'
              />
              <br />
              <label htmlFor='Password'>Password</label>
              <input
                className='form-control my-2'
                value={signIn.password}
                onChange={(e)=>{setsignIn({...signIn,[e.target.name]:e.target.value})}}
                type='password'
                name='password'
                id='password'
              />
              <p className='d-flex justify-content-center align-items-center'>
                <button type='submit' className='btn btn-success mt-3 '>
                  Login{' '}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
