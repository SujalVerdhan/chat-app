import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { MessageContainer } from '../../components/rightside/MessageContainer'


export const Home = () => {
  return (
    <div className='sm:flex-row flex bg-gray-300 bg-transparent  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100
    shadow-2xl overflow-auto xs:flex-col'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}
