import React, { useState,useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
export const usegetUsers=()=>{
  const navigate=useNavigate();
const [loading,setLoading]=useState(false)
const {setAuthUser}=useAuthContext()
const [users,setUsers]=useState([])
  useEffect(()=>{
    const getUsers=async()=>{
      setLoading(true)
      try{
    const res=await fetch("/api/users")
    const data=await res.json();
    console.log(data)
    if(data.error==="token expired"){
      localStorage.removeItem("chat-user");
      setAuthUser(null);
      navigate("/")
  }

    if(data.error){
      throw new Error(data.error)
    }
console.log(data)
setUsers(data)
      }
      catch(err){
        console.log(err)
        toast.error(`${err}`)
      }finally{
        setLoading(false)
      }
  }
  getUsers();
},[])
return {loading,users};


}