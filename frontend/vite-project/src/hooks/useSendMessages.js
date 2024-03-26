import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

export const useSendMessages = () => {
    const [loading,setLoading]=useState(false)
    const {selectedConversation,setMessages,messages}= useConversation()
  const sendMessages=async(message)=>{
    console.log("use",message)
    setLoading(true)
    try{
      
        
        const res=await fetch(`/api/messages/send/${selectedConversation._id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message})})

const data=await res.json()
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
