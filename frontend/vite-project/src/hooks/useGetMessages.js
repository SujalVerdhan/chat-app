import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

export const useGetMessages = () => {
    const [loading,setLoading]=useState(false)
    const {selectedConversation,setSelectedConversation,setMessages,messages}=useConversation()
    useEffect(()=>{
        const getMessage=async()=>{
            setLoading(true) 
            try{
             
             const res=await fetch(`/api/messages/${selectedConversation._id}`)
             const data=await res.json();
             console.log(data)
             if(data.error){
                throw new Error(data.error)
             }
             setMessages(data);
            }catch(err){
             toast.error(`${err}`)
            }finally{
             setLoading(false)
            }
          }
          if (selectedConversation?._id) getMessage();
    },[selectedConversation?._id,setMessages])
 
 return {messages,loading}
}
