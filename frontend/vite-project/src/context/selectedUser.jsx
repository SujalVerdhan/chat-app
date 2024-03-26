import React, { useContext,createContext,useState } from 'react'
export const userContext=createContext();
export const SelectedUserContextProvider = ({children}) => {
    const [selectedUser,setSelectedUser]=useState("")
    const [chatScreen,setChatScreen]=useState(true)
  return (
    <userContext.Provider value={{selectedUser,setSelectedUser,chatScreen,setChatScreen}}>
    {children}
    </userContext.Provider>

  )
}
export const useUserContext=()=>{
    return useContext(userContext)
}
