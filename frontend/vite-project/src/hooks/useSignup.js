import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const {authUser,setAuthUser}=useAuthContext()
    const [loading,setLoading]=useState(false)
  const signup=async({fullName,userName,gender,password,confirmPassword})=>{
const success=checkInputErrors({fullName,userName,gender,password,confirmPassword});
if(!success){
    return
}
setLoading(true)
try{
   
const res=await fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({fullName,userName,password,confirmPassword,gender})})
const data=await res.json();
console.log(data)
if(data.error){
    throw new Error(data.error)
}
localStorage.setItem("chat-user",JSON.stringify(data))
   
toast.success("User Saved")
setAuthUser(data)
  }catch(err){
    toast.error(`${err}`)
  }finally{

setLoading(false)
  }
 }
 return {signup,loading}
}
export default useSignup
const checkInputErrors=({fullName,userName,gender,password,confirmPassword})=>{
if(!fullName || !userName || !gender || !password || !confirmPassword){
    toast.error("Please fill all the fields.")
return false
}
if(password!==confirmPassword){
  toast.error("Password do not match with confirmpassword.")
  return false
}
if(password.length<6){
 toast.error("Password must be atleast of 6 characters")
  return false
}
return true
}