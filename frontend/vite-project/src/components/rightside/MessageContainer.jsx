import React, { useEffect, useState } from 'react'
import { Messages } from './Messages'
import { IoMdArrowRoundBack } from "react-icons/io";
import { MessageInput } from './MessageInput'
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from '../../context/AuthContext';
import { useUserContext } from '../../context/selectedUser';
import useConversation from '../../zustand/useConversation';
export const MessageContainer = () => {
    const {selectedConversation,setSelectedConversation}=useConversation()
    // const [chatScreen,setChatScreen]=useState(true)
    const {chatScreen,setChatScreen}=useUserContext()
 useEffect(()=>{
    return ()=>setSelectedConversation(null)
 },[setSelectedConversation]); 
    return ( (selectedConversation)?
  
    <div className={`${!chatScreen?"xs:hidden":""} flex h-[500px] flex-col md:min-w-[450px] w-[300px] relative`}>
<div className='bg-slate-500 relative py-2 px-2 rounded-lg'>
<button onClick={()=>{
setChatScreen(!chatScreen)
}} className='sm:hidden ml-0 btn btn-circle btn-sm'><IoMdArrowRoundBack/></button>
<span className='label-text mx-2 '>To:<span className='text-gray-900 font-bold'> {selectedConversation.userName}</span></span>
</div>
<hr/>
<Messages/>

<MessageInput/>
    </div>
  :<NoChatSelected/> 
  )
}

export const NoChatSelected=()=>{
    const {authUser}=useAuthContext()
    const {selectedConversation,setSelectedConversation}=useConversation()
    return(<div className={` xs:hidden sm:flex  flex-col justify-center text-center px-8 text-white md:min-w-[450px]`}>
   <p>{`Welcome 👋 ${authUser.userName}`}</p>
   <p>Select a chat to start messaging</p>
   <div className='text-7xl mx-auto'><TiMessages/></div>
    </div>)
}