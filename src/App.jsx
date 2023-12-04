import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>} exact/>
      <Route path='/auth' element={<AuthPage/>} exact/>
     </Routes>
    </>
  )
}

export default App
