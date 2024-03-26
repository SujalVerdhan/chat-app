import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation'
import Sound from "../assets/notification.mp3"
export const useListenMessages = () => {
 const {socket}=useSocketContext()
const {messages,setMessages}=useConversation();
useEffect(()=>{
socket?.on("newMessage",(newMessage)=>{
    const audio=new Audio(Sound)
    audio.play()
    newMessage.shouldShake=true
    setMessages([...messages,newMessage])
})
return ()=>socket?.off("newMessage")
},[socket,setMessages,messages])
}
