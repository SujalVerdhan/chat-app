import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from './extractTime'

export const Message = ({message}) => {
  const {authUser}= useAuthContext()
  const {selectedConversation}=useConversation()
 console.log("Message",message)
 const chat=message.message
 console.log("chat",chat)
  const isSender=message.senderId===authUser._id
  console.log("Sender id",message.senderId)
  console.log("Reciever id",authUser._id)
const chatClassName=isSender?"chat-end":"chat-start";
const profilePic=isSender?authUser.profilepic:selectedConversation.profilepic;
const bubbleBgColor=isSender?"bg-sky-500":""
const shake=message.shouldShake?"shake":""
//   var d = new Date(message?.createdAt);
// const hours=d?.getUTCHours(); // Hours
// const minutes=d?.getUTCMinutes(); // Hours
// const hours=d?.getUTCHours(); // Hours
const fromattedTime=extractTime(message?.createdAt)
console.log(profilePic)
  return (
    <div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src={`${profilePic}`}/>
    </div>
  </div>
  <div className="chat-header me-4 ms-2">
    {isSender?"You":selectedConversation.userName}
    {/* <time className="text-xs opacity-50">12:45</time> */}
  </div>
  <div>
  <div className={`chat-bubble ${bubbleBgColor} ${shake} text-white`}>{chat}</div>
      <time className="text-xs ms-2 me-0 opacity-50">{fromattedTime}</time>

  </div>
</div>
  )
}
