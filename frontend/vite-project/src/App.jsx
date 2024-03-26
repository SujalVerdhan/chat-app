import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './pages/Login/Login.jsx'
import  {SignUp}  from './pages/Signup/signUp.jsx'
import { Home } from './pages/Homepage/home.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'
function App() {
  
const {authUser}=useAuthContext()
  return (
    <>
      <div className=' px-auto h-screen w-full flex items-center justify-center  '>
      <Routes>
      <Route path='/login' element={authUser?<Navigate to="/"/>:<Login/>}/>
      <Route path='/signup' element={authUser?<Navigate to="/"/>:<SignUp/>}/>
      <Route path='/' element={authUser?<Home/>:<Navigate to="/login"/>}/>
      
      </Routes>
      <Toaster/>
       </div>
    </>
  )
}

export default App
