import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

const useLogout = () => {
    const {setAuthUser}=useAuthContext()
  const Logout=async()=>{
    
    try{
        const res=await fetch("/api/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"}})
        const data=await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.removeItem("chat-user")
        toast.success(data.message)
   setAuthUser(null)

    }catch(err){
        console.log(err)
        toast.error(err)
    }
  }
  return {Logout}
}
export default useLogout;