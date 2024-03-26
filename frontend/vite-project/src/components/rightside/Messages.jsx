import React from 'react'
import { Message } from './Message'
import { useGetMessages } from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/messageskeleton.jsx'
import useConversation from '../../zustand/useConversation.js'
import { useListenMessages } from '../../hooks/usListenMessages.js'

export const 
 Messages= () => {
  const {loading,messages}= useGetMessages();
  // const {messages}=useConversation()
  useListenMessages()
  console.log("Messages",messages)
  return (
   
  
  <div className=' flex flex-col-reverse py-6 px-2 overflow-scroll h-[500px] '>
      {!loading && messages.length===0 && (<p className='text-white text-center mb-auto '>Send a message to strart a conversation</p>) }

    <div className=''>
    {!loading && messages.length>0 && messages?.map(mess=>
       <Message key={mess._id} message={mess}/>
    )}
    {loading && [...Array(3)].map((_,id)=> <MessageSkeleton key={id} />)}

    
    </div>
    </div>
  )
}
