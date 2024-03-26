import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

export const useLogin = () => {
    const [loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContext()
  const Login=async({userName,password})=>{
    
    const success=checkInputs({userName,password})
    if(!success){ return}
    try{
        setLoading(true)
const res=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include", body:JSON.stringify({userName,password})})
const data=await res.json()
console.log(data)
if(data.error){
  console.log(data.error)
    throw new Error(data.error)
}
  localStorage.setItem("chat-user",JSON.stringify(data))
  toast.success("Successfully LoggedIn")
  setLoading(false)
  setAuthUser(data)
    }catch(error){
      console.log("catch",error)
      toast.error(`${error}`)
      
    }finally{
      setLoading(false)
    }
  }
  return {Login,loading}
}
const checkInputs=({userName,password})=>{
    if(!userName||!password){
        toast.error("Please fill all the fields")
        return false
    }
    if(password.length<6){
        toast.error("Password must be of atleast 6 characters")
        return false
    }
    return true
}