import React, { useState,useEffect } from 'react'
import toast from 'react-hot-toast'
export const usegetUsers=()=>{
const [loading,setLoading]=useState(false)

const [users,setUsers]=useState([])
  useEffect(()=>{
    const getUsers=async()=>{
      setLoading(true)
      try{
    const res=await fetch("/api/users")
    const data=await res.json();
    console.log(data)
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