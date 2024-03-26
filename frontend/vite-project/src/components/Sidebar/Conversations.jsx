import React, { useEffect } from 'react'
import { funEmojis, getRandomEmoji } from './emojis'
import { useUserContext } from '../../context/selectedUser'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext'
export const Conversations = ({user,emoji}) => {
  
const {selectedConversation,setSelectedConversation}=useConversation()
    console.log(selectedConversation)
  // const {selectedUser,setSelectedUser}=useUserContext()
  const isSelected=selectedConversation?._id===user._id
  // const emoji=getRandomEmoji()
  const {onlineUsers}=useSocketContext()
  const isOnline=onlineUsers.includes(user._id)
  const {chatScreen,setChatScreen}=useUserContext()
  return (
    <div onClick={()=>{setSelectedConversation(user)
    setChatScreen(true);}
    }   className={`flex justify-between items-center p-2 hover:bg-sky-500 ${isSelected?"bg-sky-500":""} `}>
    <div className={`avatar ${isOnline?"online":""}  `}>
  <div className="w-12 rounded-full">
    <img src={user.profilepic} />
  </div>
  
</div>
<span className='mr-auto ml-3 text-white'>{user.userName}</span>

<div>{emoji}</div>

    </div>
  )
}
