import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { useSendMessages } from '../../hooks/useSendMessages';
export const MessageInput = () => {
  const {loading,sendMessages}= useSendMessages()
  const [message,setMessage]=useState("")
  console.log(message)
  const handleMessage=async(e)=>{
e.preventDefault()
if(!message){
  return;
}
await sendMessages(message);
setMessage("")
  }
  return (<div className='w-full p-1 absolute bottom-0 '>
   <form onSubmit={handleMessage} className='flex bg-gray-700 border-gray-600 border p-2 rounded-md '>
    <input value={message} onChange={(e)=>setMessage(e.target.value)} type="text" className='w-full   rounded-lg outline-none  bg-gray-700'></input>
   {loading?<span className="loading loading-spinner loading-sm"></span>:<button className=''><IoIosSend/></button>} 
   </form>
   </div>
  )
}
