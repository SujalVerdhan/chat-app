import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const useSendMessages = () => {
  const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const {selectedConversation,setMessages,messages}= useConversation()
    const {setAuthUser}=useAuthContext()
  const sendMessages=async(message)=>{
    console.log("use",message)
    setLoading(true)
    try{
      
        
        const res=await fetch(`/api/messages/send/${selectedConversation._id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message})})

const data=await res.json()
if(data.error==="token expired"){
  localStorage.removeItem("chat-user");
  setAuthUser(null);
  navigate("/")
}
if(data.error){
  throw new Error(data.error)
}
console.log(data)
 setMessages([...messages,data])
// toast.success(`${data}`)
    }catch(err){
    toast.error(`${err}`)
    }finally{
   setLoading(false)
    }
  }
  return {loading,sendMessages}
}
