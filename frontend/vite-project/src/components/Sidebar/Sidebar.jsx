import React from 'react'
import { Searchbar } from "./searchbar.jsx"
import { Conversation } from "./Conversation.jsx"
import { Logout } from './Logout.jsx'
import useConversation from '../../zustand/useConversation.js'
import { useUserContext } from '../../context/selectedUser.jsx'

export const Sidebar = () => {
  const {selectedConversation}=useConversation()
  const {chatScreen}=useUserContext()
  return (
    <div className={`${selectedConversation && chatScreen===true?"xs:hidden":""} sm:flex flex-col p-2 border h-[500px]  border-gray-100 relative overflow-auto`}>
        <Searchbar/>
      <hr/>
         <Conversation/>
         <hr/>
        <Logout/>  
    </div>
  )
}
