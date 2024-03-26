import React from 'react'
import { RxExit } from "react-icons/rx";
import useLogout from '../../hooks/useLogout';
export const Logout  = () => {
  const {Logout}=useLogout()
  const handleclick=()=>{
Logout();
  }
  return (
    <div className='absolute bottom-0 p-3 '>
    <button onClick={handleclick} className=''><RxExit /></button></div>
  )
}
