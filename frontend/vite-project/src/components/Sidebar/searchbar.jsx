import React, { useState } from 'react'
import { LiaSearchSolid } from "react-icons/lia";
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { usegetUsers } from '../../hooks/useGetUsers';
import toast from 'react-hot-toast';
export const Searchbar = () => {
  const [search,setSearch]=useState("");
  const {conversations}=useConversation()
  const {users}=usegetUsers()
  const {setSelectedConversation}=useConversation()
  const handleSubmit=(e)=>{
e.preventDefault();
if(!search) return
if(search.length<2) toast.error("Enter atleast 3 character for search")
const conversation=users.find(u=>u.userName.toLowerCase().includes(search.toLowerCase()))
setSelectedConversation(conversation)
  }

  return (
    <div className='mb-2'>
    <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setSearch(e.target.value)} type='search' placeholder="Search" className='input input-bordered rounded-full'></input>
        <button className='btn mx-2 text-white btn-circle font-extrabold bg-sky-500'><LiaSearchSolid/></button>
        </form>
    </div>
  )
}
