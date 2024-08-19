import React, { useEffect, useState } from 'react'
import { Conversations } from "./Conversations.jsx"
import { usegetUsers } from '../../hooks/useGetUsers.js'
import { getRandomEmoji } from './emojis.js'

export const Conversation = () => {
  // const emoji=getRandomEmoji();
  const {users,loading}=usegetUsers()
  return (
    <div className='flex flex-col overflow-y-auto max-h-96'>
    {loading?<span className="loading loading-spinner loading-lg mx-ato absolute top-52 left-32"></span>:null}
    {users?.map(user=>{
     return( <Conversations user={user} emoji={getRandomEmoji()}/>
    
     )
    })}
      
    </div>
  )
}
