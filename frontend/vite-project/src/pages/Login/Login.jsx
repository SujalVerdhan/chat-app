import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'

export const Login = () => {
  const [inputs,setInputs]=useState({userName:"",password:""})
  const {Login,loading}=useLogin()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(inputs)
await Login(inputs)
  }
  return (
    <div className="bg-transparent w-96 max-w-md bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100
     shadow-2xl  min-w-80  ">
    <div className='flex flex-col  text-black p-4 w-full'>
<h1 className='text-3xl font-semibold text-gray-300 text-center'>Login <span className='text-blue-500'>ChatApp</span></h1>
<form onSubmit={handleSubmit}>
<div>
<label className='label p-2'>
<span className='label-text  text-gray-100 text-base'>UserName</span>

</label>
<input type="text" placeholder="Type here" onChange={(e)=>setInputs({...inputs,userName:e.target.value})} className=" bg-slate-950 input input-bordered w-full h-10" />
</div>

<div>
<label className='label '>
<span className='label-text  text-gray-100 text-base'>Password</span>

</label>
<input type="text" placeholder="Type Your Password" onChange={(e)=>setInputs({...inputs,password:e.target.value})} className="input input-bordered w-full h-10 text-white  bg-slate-950" />
</div>

<Link to="/signup" className=' p-2 text-sm hover:underline hover:text-blue-600 mt-2 inline-block'  >Don't Have an account?</Link>
<button className="btn hover:bg-gray-900 btn-block btn-sm-2 mt-2 p-0 h-6 text-white bg-slate-950 border-gray-950">{loading?<span className="loading loading-infinity loading-md"></span>:"Login"}</button>
</form>
</div>
    </div>
  )
}
